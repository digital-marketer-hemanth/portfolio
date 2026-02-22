import { GoogleTagManager } from "@next/third-parties/google";
import "@/utils/emailjs-init";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    "https://hemanth-j-digital-marketer-portfolio.netlify.app"
  ),

  title: {
    default: "Hemanth J – Digital Marketing Executive",
    template: "%s | Hemanth J Portfolio",
  },

  description:
    "Portfolio of Hemanth – Digital Marketing Executive, SEO Specialist, Paid Ads Expert & AI-Assisted Content Strategist based in Madurai.",

  keywords: [
    "Hemanth Digital Marketer",
    "SEO Specialist Madurai",
    "Digital Marketing Executive",
    "Paid Ads Expert",
    "SEO Portfolio",
    "Meta Ads Specialist",
  ],

  authors: [{ name: "Hemanth J" }],
  creator: "Hemanth J",
  publisher: "Hemanth J",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    bingBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical:
      "https://hemanth-j-digital-marketer-portfolio.netlify.app",
  },

  openGraph: {
    title: "Hemanth J – Digital Marketing Executive",
    description:
      "SEO Specialist, Paid Ads Expert & AI-Assisted Content Strategist based in Madurai.",
    url: "https://hemanth-j-digital-marketer-portfolio.netlify.app",
    siteName: "Hemanth J Portfolio",
    images: [
      {
        url: "/hemanth-digital-marketer-og-image.avif", // change to jpg if needed
        width: 1200,
        height: 630,
        alt: "Hemanth J Digital Marketer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hemanth J – Digital Marketing Executive",
    description:
      "SEO Specialist, Paid Ads Expert & AI-Assisted Content Strategist.",
    images: ["/hemanth-digital-marketer-og-image.avif"],
  },

  icons: {
    icon: "/hemanth-digital-marketer-favicon.ico",
    shortcut: "/hemanth-digital-marketer-favicon.ico",
    apple: "/hemanth-digital-marketer-favicon.ico",
  },

  themeColor: "#0d1224",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}