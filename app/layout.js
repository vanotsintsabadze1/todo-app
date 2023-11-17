import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navigation">
          <h4 className="nav_logo">TODO</h4>
        </nav>
        {children}
      </body>
    </html>
  );
}
