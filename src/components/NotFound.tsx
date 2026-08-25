export default function NotFound() {
  return (
    <main className="error-page">
      <div className="error-card">
        <a href="/" aria-label="GM Tan & Company — Home">
          <img className="brand-emblem error-emblem" src="/favicon.png" alt="" width="512" height="512" />
        </a>
        <span className="error-code">404</span>
        <h1>This page could not be found.</h1>
        <p>The address may have changed, or the page may no longer be available.</p>
        <a href="/" className="btn btn-gold">Return to homepage</a>
      </div>
    </main>
  )
}
