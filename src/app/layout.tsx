import Link from 'next/link';

export const metadata = {
  title: 'CarZone',
  description: 'CarZone Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <html>
          <body>
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f4f4f4', paddingTop:"2rem"}}>
          <h1 >CarZone</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/about">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/services">Services</Link>
          </div>
        </nav>
        <main>{children}</main>
        </body>
        </html>
  );
}