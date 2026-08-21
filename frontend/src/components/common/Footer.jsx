import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light pt-5">

      <div className="container">

        <div className="row">

          {/* About */}

          <div className="col-lg-4 mb-4">

            <h3 className="fw-bold text-success">
              NGO Management
            </h3>

            <p className="mt-3">

              We work for education, healthcare,
              food support and social welfare.
              Together we can build a better future.

            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 col-md-6 mb-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled mt-3">

              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>

              <li>
                <Link to="/projects" className="footer-link">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="footer-link">
                  Gallery
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Contact</h5>

            <p className="mt-3">

              📍 Gorakhpur, Uttar Pradesh

            </p>

            <p>

              📞 +91 9876543210

            </p>

            <p>

              ✉ info@ngo.org

            </p>

          </div>

          {/* Newsletter */}

          <div className="col-lg-3">

            <h5>

              Newsletter

            </h5>

            <p className="mt-3">

              Subscribe for latest updates.

            </p>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Email"
            />

            <button className="btn btn-success w-100">

              Subscribe

            </button>

          </div>

        </div>

        <hr className="border-secondary" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">

          <p className="mb-2 mb-md-0">

            © {year} NGO Management System

          </p>

          <div>

            <a href="#" className="social-icon">

              Facebook

            </a>

            <a href="#" className="social-icon">

              Instagram

            </a>

            <a href="#" className="social-icon">

              YouTube

            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}