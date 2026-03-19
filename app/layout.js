import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Grandes Héroes de la Libertad",
  description: "Biografías de los forjadores de la libertad en América: Miguel Grau y Simón Bolívar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
