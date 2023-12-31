// import "./globals.css";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProp {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProp) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
