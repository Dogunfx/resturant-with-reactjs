import "./global.css";

export const metadata = {
  title: "Eatery Cafe and Restaurant",
  description: "A simple Restaurant website by Dogunfx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
