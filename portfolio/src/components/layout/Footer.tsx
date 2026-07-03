import "./Footer.css"

export default function FooterSection() {
  return (
    <footer className="footer">
      <nav className="footer-nav" aria-label="Footer">
        <a href="/" className="footer-link">Home</a>
        <a href="/projects" className="footer-link">Projects</a>
        <a href="/blog" className="footer-link">Blog</a>
      </nav>

      <div className="footer-bottom">
        <div className="footer-legal">
          <a
            href="https://github.com/Wubpooz/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-secondary-link"
          >
            Source code
          </a>

          <a
            href="https://www.apple.com/legal/intellectual-property/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-secondary-link"
          >
            Licence
          </a>
        </div>

        <p className="footer-copy">
          Copyright © 2026 Mathieu Waharte. All rights reserved.
        </p>
      </div>
    </footer>
  )
}