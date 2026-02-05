import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>MUDIERA</h3>
            <p>Empowering Muslim women through business, community, and innovation.</p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Discover</h4>
            <ul className="footer-links">
              <li><Link href="/directory">Directory</Link></li>
              <li><Link href="/explore">Trends</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/categories">Categories</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Stay Updated</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" className="newsletter-input" required />
              <button type="submit" className="btn-subscribe">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Mudiera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
