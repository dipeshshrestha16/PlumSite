import './globals.css';
import TopBanner from '../components/TopBanner';

export const metadata = {
  title: 'FlowGuard Plumbing | Expert Plumbing Solutions',
  description:
    'Professional plumbing maintenance, repairs, and 24/7 emergency service for homes and businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>
        <TopBanner />
        {children}
      </body>
    </html>
  );
}
