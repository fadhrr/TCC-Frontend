import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
import { AuthContextProvider } from "@/context/AuthContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TCC",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Header />
          <div className="">{children}</div>
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
