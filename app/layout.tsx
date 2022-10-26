export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <header>
        <nav>
          <ul>
            <li>Test 1</li>
            <li>Test 2</li>
          </ul>
        </nav>
      </header>
      <body>{children}</body>
    </html>
  );
}
