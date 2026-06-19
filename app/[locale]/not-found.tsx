export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: '#011F64' }}
    >
      {/* Brand name */}
      <div
        className="mb-6 font-extrabold text-2xl tracking-widest uppercase"
        style={{ color: '#FF6B00' }}
      >
        HDB Engineering Lanka
      </div>

      {/* Large 404 watermark */}
      <div
        className="font-extrabold leading-none select-none"
        style={{ fontSize: '120px', color: 'rgba(255,255,255,0.07)' }}
      >
        404
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-white mb-3 -mt-4">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-md" style={{ color: '#bfdbfe' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* CTA buttons */}
      <div className="flex gap-3 flex-wrap justify-center">
        <a
          href="/en"
          className="font-bold px-6 py-3 rounded-2xl transition-colors"
          style={{ background: '#FF6B00', color: '#fff' }}
        >
          Go to Homepage
        </a>
        <a
          href="/en/machines"
          className="font-bold px-6 py-3 rounded-2xl transition-colors"
          style={{
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.20)',
            color: '#fff',
          }}
        >
          Browse Machines
        </a>
      </div>

      {/* Subtle footer note */}
      <p className="mt-12 text-xs" style={{ color: 'rgba(191,219,254,0.5)' }}>
        Need help?{' '}
        <a
          href="/en/contact"
          className="underline"
          style={{ color: 'rgba(191,219,254,0.7)' }}
        >
          Contact us
        </a>
      </p>
    </div>
  )
}
