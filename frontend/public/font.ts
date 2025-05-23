import {
  Montserrat,
  Open_Sans,
  Poppins,
  Roboto,
  Raleway,
} from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});
