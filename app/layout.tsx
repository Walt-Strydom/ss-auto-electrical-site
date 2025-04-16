import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "SS Auto Electrical",
  description: "Expert Auto Electrical Services on Earth Moving Equipment",
  icons: {
    icon: "/favicon.png", // Make sure the favicon.png file is in the public/ folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans bg-[#f9fafb] text-black">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
