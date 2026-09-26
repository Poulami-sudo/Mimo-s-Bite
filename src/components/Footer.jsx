import { Link } from "react-router";

function Footer() {
  return (
    <footer className="mimos-footer">
      <div className="mimos-footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Mimo's Bite</h2>
          <p>Freshly Baked With Love ❤️</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <div className="footer-contact">
            <p>📍 Kolkata, West Bengal</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 contact@mimosbite.com</p>
          </div>

          <h3 className="follow-title">Follow Us</h3>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              📘
            </a>

            <a href="#" aria-label="Instagram">
              📷
            </a>

            <a href="#" aria-label="WhatsApp">
              💬
            </a>
          </div>
        </div>

      </div>

      <div className="mimos-footer-bottom">
        <p>© 2026 Mimo's Bite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;