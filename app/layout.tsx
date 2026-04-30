import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Image Converter & Enhancer | Free Online Photo Editor",
    template: "%s | Image Converter & Enhancer",
  },
  icons: {
    icon: "/icon.png",
  },
  description:
    "Convert images between PNG, JPEG, WebP, GIF, AVIF, BMP formats instantly. Apply professional edits like brightness, contrast, saturation, hue, blur and more. Free, fast, and works entirely in your browser.",
  keywords: [
    "image converter",
    "image enhancer",
    "photo editor",
    "png to jpg",
    "webp converter",
    "image format converter",
    "free image editor",
    "brightness adjustment",
    "contrast adjustment",
    "online photo editor",
    "image compression",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Image Converter & Enhancer",
    title: "Image Converter & Enhancer | Free Online Photo Editor",
    description:
      "Convert images between formats and apply professional edits. Free, fast, and private — all processing happens in your browser.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Image Converter & Enhancer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Converter & Enhancer | Free Online Photo Editor",
    description:
      "Convert images between formats and apply professional edits. Free, fast, and private.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-white/50 backdrop-blur-sm border-b">
          <div className="max-w-5xl mx-auto flex items-center gap-4 py-4 px-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Gemini_Generated_Image_rnogjrnogjrnogjr.png"
                alt="Site logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-semibold">Image Converter & Enhancer</span>
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t bg-white/70">
          <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-600">
            <p>Image Converter &amp; Enhancer</p>
            <nav className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="hover:text-gray-900 transition-colors"
              >
                Terms and Conditions
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
