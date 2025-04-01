import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const categories = ["Technology", "Lifestyle", "Travel", "Food", "Health"];
  const quickLinks = [
    { path: "/", name: "Home" },
    { path: "/blogs", name: "Blogs" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">MindSpark-Blogs</h2>
            <p className="leading-relaxed">
              I am Prince Vishwakarma, a full stack developer from India.
              Passionate about creating digital experiences and always eager to
              learn new technologies.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:pko62547@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  pko62547@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <a
                  href="tel:+919318447744"
                  className="hover:text-blue-600 transition-colors"
                >
                  +91 9318447744
                </a>
              </p>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/prince9318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/prince-ss/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100034596588746"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaFacebook size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-600 transition-colors block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/blogs?category=${category.toLowerCase()}`}
                    className="hover:text-blue-600 transition-colors block py-1"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src={assets.logo}
              alt="MindSpark-Blogs Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">MindSpark-Blogs</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              Terms & Conditions
            </Link>
            <p>© {currentYear} MindSpark-Blogs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
