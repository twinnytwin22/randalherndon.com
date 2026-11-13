import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const LIMITS = { name: 120, email: 254, subject: 200, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function field(body: Record<string, unknown>, key: keyof typeof LIMITS) {
  const value = body[key];
  return typeof value === 'string' ? value.trim().slice(0, LIMITS[key]) : '';
}

function fail(error: string, status = 400) {
  return NextResponse.json({ success: false, error }, { status });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail('Invalid request body');
  }
  if (!body || typeof body !== 'object') return fail('Invalid request body');

  const name = field(body, 'name');
  const email = field(body, 'email');
  const subject = field(body, 'subject');
  const message = field(body, 'message');

  if (!EMAIL_RE.test(email)) return fail('A valid email is required');
  if (!message) return fail('Message is required');

  const safe = {
    name: escapeHtml(name || '(not provided)'),
    email: escapeHtml(email),
    subject: escapeHtml(subject || '(no subject)'),
    message: escapeHtml(message).replace(/\n/g, '<br>'),
  };

  // Strip CR/LF so user input can't inject extra headers via the subject line.
  const subjectLine = `RandalHerndon.com contact: ${(subject || name || email).replace(/[\r\n]+/g, ' ')}`;

  const msg = {
    to: process.env.FROM_EMAIL as string,
    replyTo: email,
    from: process.env.FROM_EMAIL as string,
    subject: subjectLine.slice(0, 200),
    text: `Name: ${name || '(not provided)'}\nEmail: ${email}\nSubject: ${subject || '(no subject)'}\n\n${message}`,
    html: `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8"><title>Contact form — RandalHerndon.com</title></head>
  <body style="margin:0;padding:24px;background:#f4f4f6;font-family:Arial,Helvetica,sans-serif;color:#28282c;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e6e6e9;border-radius:12px;padding:24px;">
      <h1 style="margin:0 0 16px;font-size:20px;">New message from randalherndon.com</h1>
      <p style="margin:0 0 8px;"><strong>Name:</strong> ${safe.name}</p>
      <p style="margin:0 0 8px;"><strong>Email:</strong> ${safe.email}</p>
      <p style="margin:0 0 16px;"><strong>Subject:</strong> ${safe.subject}</p>
      <p style="margin:0;line-height:1.6;">${safe.message}</p>
    </div>
    <p style="max-width:600px;margin:16px auto 0;text-align:center;font-size:12px;color:#75757c;">
      Sent from the contact form at <a href="https://randalherndon.com/" style="color:#75757c;">randalherndon.com</a>
    </p>
  </body>
</html>`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return fail('Error sending email', 500);
  }
}
