import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className + "w-full text-slate-900 "}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
