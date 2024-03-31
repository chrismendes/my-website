import { Noto_Sans, Roboto_Slab, Fjalla_One, Oswald } from "next/font/google";

export const fontRoboto = Roboto_Slab({
  subsets: ["latin"]
});
export const fontNoto = Noto_Sans({
  subsets: ["latin"]
});
export const fontFjalla = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
});
export const fontOswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});