import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Crew Impex" className="h-16 w-auto" />
              <span className="font-display font-bold text-xl text-primary-foreground">Crew Impex</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Global Moves, Seamless Reach. Your trusted partner in international trade and exports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-secondary font-display text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {["Formals", "Casuals", "Boots", "Sports", "Sneakers"].map((product) => (
                <li key={product}>
                  <Link
                    to={`/products/${product.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-secondary font-display text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail size={16} className="text-secondary" />
                <span>sales@crewimpex.com</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <Phone size={16} className="text-secondary mt-1" />
                <div className="flex flex-col">
                  <span>+91 9915815334</span>
                  <span>+91 8755406105</span>
                  <span>+91 98999 23754</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin size={16} className="text-secondary mt-1" />
                <span>Wave City, Ghaziabad, Uttar Pradesh, India 201010</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Globe size={16} className="text-secondary" />
                <span>www.crewimpex.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 Crew Impex. All rights reserved. Global Moves, Seamless Reach.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;