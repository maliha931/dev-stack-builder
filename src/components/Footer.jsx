import React from "react";
import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700">
        
        {/* Brand Section */}
        <div className="md:col-span-2">
          <img
            src={logoText}
            alt="Dev Stack Logo"
            className="h-8 w-auto"
          />
          <p className="mt-3 text-sm text-gray-600">
            Curated tools, technologies, and resources for developers building <br></br> modern software.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-900">GitHub</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Product</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
            <li><a href="#" className="hover:text-gray-900">Projects</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-10 py-6 text-center text-sm text-gray-500">
        © 2026 Dev Stack. All rights reserved.{" "}
        <a href="#" className="hover:text-gray-900">Privacy</a> |{" "}
        <a href="#" className="hover:text-gray-900">Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
