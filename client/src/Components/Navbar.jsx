import React from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img3.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img5.jpg";
import img7 from "../assets/img1.jpg";
import img8 from "../assets/img5.jpg";
import img9 from "../assets/img3.jpg";

const Nav = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12 text-sm">
          <div className="flex items-center space-x-8">
            <span className="text-xl">&#63743;</span>
            <a href="#" className="hover:text-gray-300">
              Store
            </a>
            <a href="#" className="hover:text-gray-300">
              Mac
            </a>
            <a href="#" className="hover:text-gray-300">
              iPad
            </a>
            <a href="#" className="hover:text-gray-300">
              iPhone
            </a>
            <a href="#" className="hover:text-gray-300">
              Watch
            </a>
            <a href="#" className="hover:text-gray-300">
              AirPods
            </a>
            <a href="#" className="hover:text-gray-300">
              TV & Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Entertainment
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <span className="cursor-pointer">&#128269;</span>
            <span className="cursor-pointer">&#128722;</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Button = ({ children, variant = "primary" }) => {
  const baseStyle = "px-5 py-2 rounded-full text-sm font-medium transition-all";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return <button className={`${baseStyle} ${variants[variant]}`}>{children}</button>;
};

const HeroSection = ({ title, subtitle, bgColor, textColor, imageSrc, imageAlt }) => {
  return (
    <section
      className={`${bgColor} ${textColor} py-12 min-h-[600px] flex flex-col items-center justify-start`}
    >
      <div className="text-center mb-6 mt-8">
        <h2 className="text-5xl font-semibold mb-2">{title}</h2>
        <p className="text-xl mb-6">{subtitle}</p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Learn more</Button>
          <Button variant="secondary">Buy</Button>
        </div>
      </div>
      <div className="w-full max-w-5xl px-4">
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

const ProductCard = ({
  title,
  subtitle,
  bgColor,
  textColor,
  imageSrc,
  imageAlt,
  size = "full",
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} ${
        size === "half" ? "w-full md:w-1/2" : "w-full"
      } min-h-[600px] flex flex-col items-center justify-start p-8`}
    >
      <div className="text-center mb-6 mt-4">
        <h3 className="text-4xl font-semibold mb-2">{title}</h3>
        <p className="text-lg mb-6">{subtitle}</p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Learn more</Button>
          <Button variant="secondary">Buy</Button>
        </div>
      </div>
      <div className="w-full max-w-lg">
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Shop and Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Store</a></li>
              <li><a href="#" className="hover:underline">Mac</a></li>
              <li><a href="#" className="hover:underline">iPad</a></li>
              <li><a href="#" className="hover:underline">iPhone</a></li>
              <li><a href="#" className="hover:underline">Watch</a></li>
              <li><a href="#" className="hover:underline">AirPods</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Apple Music</a></li>
              <li><a href="#" className="hover:underline">Apple TV+</a></li>
              <li><a href="#" className="hover:underline">Apple Arcade</a></li>
              <li><a href="#" className="hover:underline">iCloud</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Apple Store</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Find a Store</a></li>
              <li><a href="#" className="hover:underline">Genius Bar</a></li>
              <li><a href="#" className="hover:underline">Today at Apple</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">For Business</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Apple and Business</a></li>
              <li><a href="#" className="hover:underline">Shop for Business</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">About Apple</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Leadership</a></li>
              <li><a href="#" className="hover:underline">Career Opportunities</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4 text-xs text-gray-500">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function AppleLandingPage() {
  return (
    <div className="font-sans">
      <Nav />

      <HeroSection
        title="iPhone 17 Pro"
        subtitle="All out. Pro."
        bgColor="bg-black"
        textColor="text-white"
        imageSrc={img1}
        imageAlt="iPhone 17 Pro"
      />

      <HeroSection
        title="iPhone Air"
        subtitle="The thinnest iPhone ever. With the power of pro inside."
        bgColor="bg-white"
        textColor="text-black"
        imageSrc={img2}
        imageAlt="iPhone Air"
      />

      <HeroSection
        title='MacBook Pro 14"'
        subtitle="Supercharged by M4."
        bgColor="bg-black"
        textColor="text-white"
        imageSrc={img3}
        imageAlt="MacBook Pro"
      />

      <div className="flex flex-col md:flex-row">
        <ProductCard
          title="Using them together sets them apart."
          subtitle="Apple services work together so you can do things no other devices can."
          bgColor="bg-gray-50"
          textColor="text-black"
          imageSrc={img4}
          imageAlt="Apple Ecosystem"
          size="half"
        />
        <ProductCard
          title="iPad Pro"
          subtitle="Unbelievably thin. Incredibly powerful. Advanced AI and game-changing capabilities."
          bgColor="bg-black"
          textColor="text-white"
          imageSrc={img5}
          imageAlt="iPad Pro"
          size="half"
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <ProductCard
          title="WATCH SERIES 11"
          subtitle="The ultimate watch for a healthy life."
          bgColor="bg-white"
          textColor="text-black"
          imageSrc={img6}
          imageAlt="Apple Watch"
          size="half"
        />
        <ProductCard
          title="AirPods Pro 3"
          subtitle="Adaptive. Noise Cancellation. A leap beyond sound."
          bgColor="bg-gray-50"
          textColor="text-black"
          imageSrc={img7}
          imageAlt="AirPods Pro"
          size="half"
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <ProductCard
          title="MacBook Air"
          subtitle="Sky-high performance with M4."
          bgColor="bg-white"
          textColor="text-black"
          imageSrc={img8}
          imageAlt="MacBook Air"
          size="half"
        />
        <ProductCard
          title="Trade In"
          subtitle="Upgrade and save with Apple Trade In."
          bgColor="bg-gray-50"
          textColor="text-black"
          imageSrc={img9}
          imageAlt="Trade In"
          size="half"
        />
      </div>

      <Footer />
    </div>
  );
}
