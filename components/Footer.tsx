import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-3 grid-rows-[200px] items-center justify-items-center gap-28 bg-[#08262e] px-8 font-[sans-serif] text-lg font-[16px] text-[whitesmoke]">
        <div>
          <h4>Address</h4>
          <p>
            {" "}
            19 W Main Rd, Middletown, Rhode Island, Zip Code : 02842, Phone
            Number : (401) 849-6940 United States
          </p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/login/">
            <li>Facebook</li>
          </a>
          <a href="https://www.instagram.com/login/">
            <li>Instagram</li>
          </a>
          <a href="https://www.twitter.com/login/">
            <li>Twitter</li>
          </a>
        </div>

        <div>
          <h4>Features</h4>
          <a href="http://www.targetacademy.in/books-and-authors/">
            <p>Featured Authors</p>
          </a>
          <a href="about.html">
            <p>About Us</p>
          </a>
        </div>
      </footer>
      <div className="ml-10 mt-3 text-sm text-white">
        <p>&copy; Kitaab Store</p>
      </div>
    </>
  );
};

export default Footer;
