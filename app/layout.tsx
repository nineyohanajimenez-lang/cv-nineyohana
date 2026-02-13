import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Hoja de Vida",
  description: "Hoja de vida profesional",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
