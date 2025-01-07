import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Piano Covers</title>
      <body>{children}</body>
    </html>
  );
}
