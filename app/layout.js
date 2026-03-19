import "./globals.css";

export const metadata = {
  title: "Miguel Grau - El Caballero de los Mares",
  description: "Biografía del Gran Almirante Miguel Grau Seminario, héroe nacional del Perú.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
