import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

export const sf = localFont({
  src: "../fonts/SF/SF-Pro-Text-Heavy.otf",
  display: "swap",
});

export const eubergine = localFont({
  src: "../fonts/eubergine/free/Eubergine-Font.ttf",
  display: "swap",
});

export const bonSignatur = localFont({
  src: "../fonts/bon/Bonista-Signature.otf",

  display: "swap",
});
