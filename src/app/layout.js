import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next App",
    template: "%s | Next App",
  },
  description: "Generated by Allsamir",
  keywords: ["Allsamir", "nextapp"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="https://static-00.iconduck.com/assets.00/file-type-favicon-icon-2048x2048-q7lmo5fn.png"
        type="image/x-icon"
      />

      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
