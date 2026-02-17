import './globals.css'

export const metadata = {
  title: 'Descargador de Videos Sxcay - YouTube & TikTok 4K/8K / MP3',
  description: 'Descarga videos de YouTube y TikTok en 4K, 8K y formato MP3 de alta calidad. El mejor descargador gratuito, rápido y sin anuncios.',
  keywords: 'descargador de videos, youtube downloader, tiktok downloader, youtube mp3, descargar video 4k, descargar video 8k, sxcay',
  openGraph: {
    title: 'Descargador de Videos Sxcay',
    description: 'Descarga videos en máxima calidad (4K/8K) gratis.',
    url: 'https://sxcay-descargador.loca.lt',
    siteName: 'Sxcay Video Downloader',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Descargador de Videos Sxcay",
    "operatingSystem": "Web",
    "applicationCategory": "MultimediaApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "886"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5126931877883409"
          crossorigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
