import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./_components/Providers";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
  types: string[];
};

export default function RootLayout({ children, types }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
