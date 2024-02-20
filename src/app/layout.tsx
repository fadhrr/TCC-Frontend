import { Inter } from "next/font/google";
import Header from "@/components/Nav";
import Footer from "@/components/Footer";
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
      <body className={`min-h-[100vh] flex flex-col ${inter.className}`}>
        <AuthContextProvider>
          <Header />
          <div>{children}</div>
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
