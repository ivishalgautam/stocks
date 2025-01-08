import { Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Unlisted Buzz",
  description: "Unlisted Buzz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Layout>
          {children}
          <Toaster />
        </Layout>
      </body>
    </html>
  );
}
