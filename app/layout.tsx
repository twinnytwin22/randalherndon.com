import Providers from "@/lib/providers";
import "@/styles/globals.css";

export const metadata = {
  title: "RandalHerndon.com",
  description:
    "Randal Herndon | Interdisciplinary, Creative, Developer, Musician.",
  openGraph: {
    title: "RandalHerndon.com",
    description:
      "Randal Herndon | Interdisciplinary, Creative, Developer, Musician.",
    url: "https:/randalherndon.com",
    siteName: "Hi. I'm Randal",
    images: [
      {
        url: "https://i.imgur.com/0rfoa02.jpeg",
        width: 800,
        height: 800,
      },
      {
        url: "https://i.imgur.com/0rfoa02.jpeg",
        width: 1800,
        height: 1800,
        alt: "My custom alt",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 dark:bg-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
