import "./globals.css";
import { Barlow_Condensed, DM_Sans } from "next/font/google"; 
//setup fonts using nextjs font module, it downloads and self hosts the font files at buildtime
//so that there are no external requests to google fonts at runtime!
                                                              

import NavBar from "@/components/NavBar/NavBar";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",

});

export const metadata = {
  title: "SVG Stroke Page Transition | lowleveldemigod",
  description: "SVG wipe-draw page transition with Next.js and GSAP.",
};

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
    >
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
