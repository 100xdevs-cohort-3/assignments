import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import './globals.css';
export const metadata: Metadata = {
  title: 'Gather — Events worth your time',
  description: 'Discover gatherings, host an event, and book your next experience.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <footer className="site-footer">Gather · Make time for good company.</footer>
        </Providers>
      </body>
    </html>
  );
}
