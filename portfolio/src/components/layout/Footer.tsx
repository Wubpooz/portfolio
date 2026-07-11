import "./Footer.css";
import { getUiContent, useLocale } from "@/i18n";
import { Link } from "react-router-dom";

export default function FooterSection() {
  const { locale } = useLocale();
  const content = getUiContent(locale);

  return (
    <footer className="footer mt-auto">
      <nav
        className="footer-nav"
        aria-label={
          locale === "fr" ? "Navigation de pied de page" : "Footer navigation"
        }
      >
        <Link to="/" className="footer-link">
          {content.nav.home}
        </Link>
        <Link to="/projects" className="footer-link">
          {content.nav.projects}
        </Link>
        {/* <Link to="/blog" className="footer-link">{content.nav.blog}</Link> */}
      </nav>

      <div className="footer-bottom">
        <div className="footer-legal">
          <a
            href="https://github.com/Wubpooz/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-secondary-link"
          >
            {content.footer.sourceCode}
          </a>

          <a
            href="https://www.apple.com/legal/intellectual-property/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-secondary-link"
          >
            {content.footer.licence}
          </a>
        </div>

        <p className="footer-copy">{content.footer.copyright}</p>
      </div>
    </footer>
  );
}
