const from = process.env.FROM_EMAIL
const to = process.env.TO_EMAIL
const api =process.env.SENDGRID_API_KEY

export default async function (req:any, res: any) {
 const {subject, email, message}= req.body
    const msg = {
      to: to, // Change to your recipient
      from: from, // Change to your verified sender
      subject: 'The CRIB Contact Form',
      text: 'New Message from the CRIB',
      html: `<strong>${subject}</strong>,
      <strong>${email}</strong>
      <strong>${message}</strong>,`,
    }
  }