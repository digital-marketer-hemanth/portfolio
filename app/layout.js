import { Poppins } from "next/font/google";
import "@/utils/emailjs-init";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import Script from "next/script";

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
    default: "Hemanth J | Digital Marketer in Madurai | SEO & SMM Expert",
    template: "%s | Hemanth J Digital Marketer Portfolio",
  },

  description:
    "Digital Marketer in Madurai specializing in SEO, SMM, AI-assisted content writing, and Meta Ads. Helping businesses increase traffic, leads, and revenue.",

  keywords: [
    "Hemanth Digital Marketer",
    "SEO Specialist Madurai",
    "Digital Marketing Executive",
    "Paid Ads Expert",
    "Meta Ads Specialist",
    "SEO Portfolio",
  ],

  authors: [{ name: "Hemanth J" }],
  creator: "Hemanth J",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://hemanth-j-digital-marketer-portfolio.netlify.app",
  },

  openGraph: {
    title: "Hemanth J | Digital Marketer in Madurai | SEO & SMM Expert",
    description:
      "Digital Marketer in Madurai specializing in SEO, SMM, AI-assisted content writing, and Meta Ads. Helping businesses increase traffic, leads, and revenue.",
    url: "https://hemanth-j-digital-marketer-portfolio.netlify.app",
    siteName: "Hemanth J Portfolio",
    images: [
      {
        url: "/hemanth-digital-marketer-og-image.avif",
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
    title: "Hemanth J | Digital Marketer in Madurai | SEO & SMM Expert",
    description:
      "Digital Marketer in Madurai specializing in SEO, SMM, AI-assisted content writing, and Meta Ads. Helping businesses increase traffic, leads, and revenue.",
    images: ["/hemanth-digital-marketer-og-image.avif"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        {/* 🔥 Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W5S7TZ3Q');
          `}
        </Script>

        {/*GTM NoScript (Body Top) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5S7TZ3Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollToTop />
          {children}
        </main>

        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />

      </body>
    </html>
  );
}