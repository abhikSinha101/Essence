import { Roboto } from "next/font/google";

import localFont from "next/font/local";
import Inter from "next/font/local";

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const sf = localFont({
  src: "../fonts/SF/SF-Pro-Display-Medium.otf",
  display: "swap",
});

export const c = Inter({
  src: "../font/Inter/Inter-Regular.ttf",
  display: "swap",
});
/*export const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});*/
