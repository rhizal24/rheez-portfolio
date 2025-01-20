import localFont from "next/font/local";
import "./globals.css";

const JustSans = localFont({
  src: [
    {
      path: "../../public/fonts/JustSans.ttf",
      weight: "100...900",
    },
  ],
  variable: "--font-just-sans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${JustSans.variable} ${JustSans.variable} antialiased mx-[20px]`}
      >
        {children}
      </body>
    </html>
  );
}
