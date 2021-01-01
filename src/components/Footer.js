import React from "react";

import "../styles/Footer.css";

function Footer() {
  const footerLinksCol1 = [
    "Careers",
    "Blog",
    "About Amazon (Clone)",
    "Press Center",
    "Investor Relations",
    "Amazon (Clone) Devices",
    "Amazon (Clone) Tours",
  ];

  const footerLinksCol2 = [
    "Sell On Amazon (Clone)",
    "Sell apps on Amazon (Clone)",
    "Become an Affiliate",
    "Advertise Your Products",
    "Self-Publish with Us",
    "Host an Amazon Hub",
    "> See More Make Money with Us",
  ];

  const footerLinksCol3 = [
    "Amazon (Clone) Rewards Visa Signature Cards",
    "Amazon(Clone).com Store Card",
    "Amazon (Clone) Business Card",
    "Amazon (Clone) Business Line of Credit",
    "Shop with Points",
    "Credit Card Marketplace",
    "Reload Your Balance",
    "Amazon (Clone) Currency Converter",
  ];

  const footerLinksCol4 = [
    "Amazon (Clone) and COVID-19",
    "Your Account",
    "Your Orders",
    "Shipping Rates & Policies",
    "Amazon (Clone) Prime",
    "Returns & Replacements",
    "Manage Your Content and Devices",
    "Amazon (Clone) Assistant",
    "Help",
  ];

  return (
    <div className="footer">
      <div className="footer__back-to-top">
        <p>Back to top</p>
      </div>
      <div className="footer__links">
        <div className="footer__links-column">
          <p className="footer__links-column-header">Get to Know Us</p>
          {footerLinksCol1.map((item) => (
            <a href="#">{item}</a>
          ))}
        </div>
        <div className="footer__links-column">
          <p className="footer__links-column-header">Make Money with Us</p>
          {footerLinksCol2.map((item) => (
            <a href="#">{item}</a>
          ))}
        </div>
        <div className="footer__links-column">
          <p className="footer__links-column-header">
            Amazon (Clone) Payment Products
          </p>
          {footerLinksCol3.map((item) => (
            <a href="#">{item}</a>
          ))}
        </div>
        <div className="footer__links-column">
          <p className="footer__links-column-header">Let Us Help You</p>
          {footerLinksCol4.map((item) => (
            <a href="#">{item}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
