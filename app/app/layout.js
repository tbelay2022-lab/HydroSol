export const metadata = {
  title: "Hydrosol Energy",
  description: "Hydrosol Energy Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
