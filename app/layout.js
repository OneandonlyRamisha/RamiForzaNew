import "./globals.css";
import Navigation from "@/components/homePageSections/navigation/navigation";
import { Poppins, Lora } from "next/font/google";
import NavigationBurger from "@/components/homePageSections/navigation/burgerNavigation/burgerNavigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--lora",
});

export const metadata = {
  title: "RamiForza Agency | Web Design And Development Agency",
  description:
    "RamiForza Agency is a full-service web design and development agency specializing in responsive design, SEO optimization, e-commerce solutions, and digital marketing strategies to elevate your online presence.",
  keywords: [
    "Web Design",
    "Web Development",
    "Responsive Design",
    "SEO Optimization",
    "E-commerce Solutions",
    "Digital Marketing",
    "RamiForza Agency",
  ],
  openGraph: {
    title: "RamiForza Agency | Web Design & Development",
    description:
      "Agency for responsive websites, SEO, e-commerce & digital marketing.",
    url: "https://ramiforza.com",
    siteName: "RamiForza Agency",
    images: [
      {
        url: "https://ramiforza.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "RamiForza Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RamiForza Agency",
    description:
      "Full-service web design & development, SEO, e-commerce & digital marketing.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body>
        <Navigation />
        <NavigationBurger />
        {children}
      </body>
    </html>
  );
}
