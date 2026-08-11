import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "香源小食馆 Restoran Xian Yuan | Alor Gajah 中餐馆",
  description: "香源小食馆位于 Alor Gajah, Melaka，主打镬气小炒、叁巴鲜虾、卤猪脚与家常中餐。欢迎致电 06-556 0689 订位。",
  openGraph: {
    title: "香源小食馆 Restoran Xian Yuan",
    description: "熟悉的家乡味，每一桌都热腾腾。Alor Gajah, Melaka。",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "香源小食馆招牌菜" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hans"><body>{children}</body></html>;
}
