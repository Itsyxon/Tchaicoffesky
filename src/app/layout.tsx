import type { Metadata } from "next";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "Кофейня «ЧайКофский»",
  description: "Сайт кофейни «ЧайКофский»",
  keywords: "Чай, кофе, эспрессо, горячие напитки"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-main">
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
