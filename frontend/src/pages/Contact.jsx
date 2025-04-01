import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Header Section */}
      <header className="text-center mb-12">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-black-900 dark:text-black mb-4"
        >
          Contact Us
        </motion.h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-black-600 dark:text-black-300 max-w-3xl mx-auto leading-relaxed"
        >
          Have questions or want to collaborate? We'd love to hear from you!
          Reach out through any of the channels below or send us a message using
          the contact form.
        </motion.p>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Info and Form */}
        <div className="space-y-8">
          {/* Contact Information Card */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Get In Touch
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FiMail className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@mindsparkblogs.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    pko62547@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiPhone className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +91 9318447744
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMapPin className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">
                    Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    2nd-Cross Yemalur, Bangalore City, 560037, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="font-medium text-gray-700 dark:text-gray-100 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FiTwitter className="text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100034596588746"
                  aria-label="Facebook"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FiFacebook className="text-2xl" />
                </a>
                <a
                  href="https://github.com/prince9318"
                  aria-label="GitHub"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <FiGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prince-ss/"
                  aria-label="LinkedIn"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors"
                >
                  <FiLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
        </div>

        {/* Right Column - Contact Image */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-xl sticky top-8"
        >
          <img
            src={assets.contact}
            alt="Team members collaborating in a modern office"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
