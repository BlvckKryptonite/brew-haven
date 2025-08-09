import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-stone-900/50 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold gradient-text mb-4">Brew Haven</h4>
            <p className="text-stone-400 mb-4 leading-relaxed">
              Crafting exceptional coffee experiences since 2015. Where community, quality, and
              passion come together in every cup.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-stone-100 mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  Our Story
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  Catering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  Private Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  Wholesale
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h5 className="text-lg font-semibold text-stone-100 mb-4">Customer Service</h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  Loyalty Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold text-stone-100 mb-4">Visit Us</h5>
            <div className="space-y-3 text-stone-400">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 h-5 w-5 mt-1" />
                <span>
                  123 Coffee Street
                  <br />
                  Downtown District, City 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400 h-5 w-5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400 h-5 w-5" />
                <span>hello@brewhaven.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">© 2024 Brew Haven. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-stone-400 hover:text-amber-400 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-amber-400 text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-amber-400 text-sm transition-colors duration-200"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
