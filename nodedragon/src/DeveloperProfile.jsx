import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function DeveloperProfile() {
  const [showContent, setShowContent] = useState(false);

  // Initial animation for page load
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowContent(true),
    });

    tl.from(".profile-container", {
      opacity: 0,
      y: 75, // Increased by 50% from 50
      duration: 1.5,
      ease: "Expo.easeInOut",
    });
  }, []);

  // Animations for content sections
  useGSAP(() => {
    if (!showContent) return;

    gsap.from(".bio-section", {
      opacity: 0,
      x: -75, // Increased by 50% from -50
      duration: 1,
      delay: 0.2,
      ease: "Expo.easeInOut",
    });

    gsap.from(".features-section", {
      opacity: 0,
      x: 75, // Increased by 50% from 50
      duration: 1,
      delay: 0.4,
      ease: "Expo.easeInOut",
    });

    gsap.from(".open-source-section", {
      opacity: 0,
      y: 75, // Increased by 50% from 50
      duration: 1,
      delay: 0.6,
      ease: "Expo.easeInOut",
    });

    gsap.from(".cta-section", {
      opacity: 0,
      y: 75, // Increased by 50% from 50
      duration: 1,
      delay: 0.8,
      ease: "Expo.easeInOut",
    });
  }, [showContent]);

  return (
    <div className="profile-container w-full min-h-screen bg-black text-white px-6 sm:px-9 md:px-12 lg:px-15">
      {showContent && (
        <div className="max-w-[2550px] mx-auto pl-50 sm:py-24 md:py-20 lg:py-36">
          {/* Header */}
          <div className="flex items-center gap-4.5 sm:gap-6 md:gap-7.5 lg:gap-9 mb-12 sm:mb-15 md:mb-18 lg:mb-24">
            <div className="lines flex flex-col gap-1.5">
              <div className="line w-12 h-1.5 bg-green-500 sm:w-15 md:w-18 lg:w-21"></div>
              <div className="line w-7.5 h-1.5 bg-green-500 sm:w-9 md:w-10.5 lg:w-12"></div>
              <div className="line w-4.5 h-1.5 bg-green-500 sm:w-6 md:w-7.5 lg:w-9"></div>
            </div>
            <h1 className="text-4.5xl sm:text-6xl md:text-7.5xl lg:text-9xl font-bold font-['Helvetica_Now_Display',_sans-serif]">
              Developer Profile: Lagan Mehta
            </h1>
          </div>

          {/* Bio Section */}
          <div className="bio-section flex flex-col md:flex-row gap-9 sm:gap-12 md:gap-15 mb-18 sm:mb-24 md:mb-30">
            <div className="w-full md:w-2/3">
              <h2 className="text-xl sm:text-4.5xl md:text-6xl lg:text-7.5xl font-bold mb-6 sm:mb-9">
                Meet Lagan Mehta
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-['Helvetica_Now_Display',_sans-serif] mb-6">
                Lagan Mehta is the visionary developer behind Node Dragon, a groundbreaking no-code/low-code platform that revolutionizes backend API development. In an incredible feat, Lagan built Node Dragon in just 10 days, showcasing his expertise and passion for creating accessible development tools.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-['Helvetica_Now_Display',_sans-serif]">
                With a focus on innovation, Lagan leveraged machine learning models to create a unique process that converts blog-style workflows into log files and then into executable code, making server creation intuitive and efficient for users of all skill levels.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="features-section mb-18 sm:mb-24 md:mb-30">
            <h2 className="text-3xl sm:text-4.5xl md:text-6xl lg:text-7.5xl font-bold mb-9 sm:mb-12 md:mb-15">
              Node Dragon: Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 sm:gap-12">
              <div className="flex flex-col gap-6">
                <img
                  src="https://cdn.prod.website-files.com/6375f3c1da17810de0e82d34/66314542978ec7feac852285_nodes_2.webp"
                  className="w-full max-w-[750px] h-200 mx-auto rounded-lg object-cover"
                />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Drag-and-Drop Server Builder
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-['Helvetica_Now_Display',_sans-serif]">
                  Node Dragon allows users to build full backend APIs by dragging and dropping logic blocks. Create complex server logic for authentication, databases, and more without writing a single line of code.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <img
                  src="data:image/png;base64,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"
                  alt="ML-Driven Process"
                  className="w-full max-w-[750px] mx-auto rounded-lg object-cover"
                />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  ML-Powered Code Generation
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-['Helvetica_Now_Display',_sans-serif]">
                  Node Dragon uses advanced machine learning models to convert blog-style workflows into log files, which are then transformed into executable code. This seamless process makes backend development accessible to everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Open Source & Investment Section */}
          <div className="open-source-section mb-18 sm:mb-24 md:mb-30">
            <h2 className="text-3xl sm:text-4.5xl md:text-6xl lg:text-7.5xl font-bold mb-9 sm:mb-12 md:mb-15">
              Open Source & Community Driven
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-['Helvetica_Now_Display',_sans-serif] mb-6">
              Node Dragon is proudly open-source, meaning anyone can use, modify, and contribute to the project. Create servers for free and join a global community of developers enhancing this innovative platform.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-['Helvetica_Now_Display',_sans-serif] mb-6">
              Interested in supporting Node Dragon? This live project welcomes investment from individuals and organizations eager to shape the future of no-code development. Your contribution can help scale this revolutionary tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-9 md:gap-12 mt-9 sm:mt-12">
              <a
                href="https://github.com/LaganMehtaJi/nodeDragon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-9 py-4.5 sm:px-12 sm:py-6 md:px-15 md:py-7.5 text-black text-2xl sm:text-3xl md:text-4xl rounded-lg text-center"
              >
                Contribute on GitHub
              </a>
              <a
                href="mailto:laganmehta.in@gmail.com"
                className="bg-blue-500 px-9 py-4.5 sm:px-12 sm:py-6 md:px-15 md:py-7.5 text-white text-2xl sm:text-3xl md:text-4xl rounded-lg text-center"
              >
                Invest in Node Dragon
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section flex flex-col items-center gap-6 sm:gap-9 md:gap-12">
            <div className="flex gap-4.5 sm:gap-6 md:gap-7.5 items-center">
              <i className="ri-arrow-down-line text-3xl sm:text-4xl md:text-4.5xl lg:text-6xl"></i>
              <h3 className="text-4.5xl sm:text-6xl md:text-7.5xl lg:text-9xl font-['Helvetica_Now_Display',_sans-serif]">
                Explore More
              </h3>
            </div>
            <img
              src="./logo.png"
              alt="Node Dragon Logo"
              className="h-16 sm:h-18 md:h-21 lg:h-24"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DeveloperProfile;