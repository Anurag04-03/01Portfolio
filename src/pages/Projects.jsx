import React, { useState, useEffect, useRef } from "react";
import "../styles/carousel.css";

const entries = [
  {
    id: 1,
    label: "project 1",
    image: "https://static.thenounproject.com/png/5863586-200.png",
    desc: [
      "A Campus Shop E-Commerce Website serves as a centralized marketplace for a college or university.",
      "It can offer a range of products, including merchandise, books, stationery, tech gadgets", 
      "And even services like ticketing for campus events.",
      
      "Technology used: HTML, CSS, JS, React, Tailwind CSS.",
    ],
    title: "Campus Shop E-Com Website",
    platforms: [
      {
        type: "web",
        url: "https://github.com/Anurag04-03",
        icon: "https://tse4.mm.bing.net/th?id=OIP.EZlrYRUTvr0OI3famwPcNgHaHa&pid=Api&P=0&h=180",
      },
    ],
  },
  {
    id: 2,
    label: "project 2",
    image: "https://static.thenounproject.com/png/7313277-84.png",
    title: "Your logo's Trip Planning Website",
    desc: [
      "A trip planning website helps users organize travel plans, find destinations, book accommodations, and manage itineraries.",
      "It integrates various features such as destination search, map visualization",
      "travel guides, expense tracking, and collaborative planning.",
      "Technology used: HTML, CSS, JS, React, Tailwind CSS.",
    ],
    platforms: [
      {
        type: "web",
        url: "https://github.com/Anurag04-03",
        icon: "https://tse4.mm.bing.net/th?id=OIP.EZlrYRUTvr0OI3famwPcNgHaHa&pid=Api&P=0&h=180",
      },
    ],
  },
  {
    id: 3,
    label: "project 3",
    image: "https://static.thenounproject.com/png/3569501-200.png",
    title: "Currency Converter",
    desc: [
      "This currency converter allows users to convert an amount from one currency to another based on current exchange rates.",
      "The project can be as simple or advanced as you'd like, incorporating features",
      "such as real-time data updates, multi-language support, and a polished user interface.",
      "Technology used: HTML, CSS, JS, React, Tailwind CSS.",
    ],
    platforms: [
      {
        type: "playstore",
        url: "https://github.com/Anurag04-03",
        icon: "https://tse4.mm.bing.net/th?id=OIP.EZlrYRUTvr0OI3famwPcNgHaHa&pid=Api&P=0&h=180",
      },
      {
        type: "appstore",
        url: "https://www.google.com",
        icon: "/images/appstore.png",
      },
    ],
  },
  {
    id: 4,
    label: "Project 4",
    image: "https://static.thenounproject.com/png/1002240-200.png",
    title: "Password Generator",
    desc: [
      "A password generator helps users create strong, random passwords to enhance security.",
      "It can include options to customize password length and complexity",
      "while ensuring compliance with security best practices.",
      "Technology used: HTML, CSS, JS, React, Tailwind CSS.",
    ],
    platforms: [
      {
        type: "appstore",
        url: "https://github.com/Anurag04-03",
        icon: "https://tse4.mm.bing.net/th?id=OIP.EZlrYRUTvr0OI3famwPcNgHaHa&pid=Api&P=0&h=180",
      },
    ],
  },
  {
    id: 5,
    label: "project 5",
    image: "https://static.thenounproject.com/png/631767-200.png",
    title: "Background Changer",
    desc: [
      "A Background Changer allows users to modify the appearance of a webpage or application background.",
      "It can include features like setting solid colors, gradients",
      "or background images based on user preferences, random generators, or pre-defined themes.",
      "Technology used: HTML, CSS, JS, React, Tailwind CSS.",
    ],
    platforms: [
      {
        type: "appstore",
        url: "https://github.com/Anurag04-03",
        icon: "https://tse4.mm.bing.net/th?id=OIP.EZlrYRUTvr0OI3famwPcNgHaHa&pid=Api&P=0&h=180",
      },
    ],
  },
];

const PlatformLinks = ({ platforms }) => (
  <div className="platform-links  w-[100px] h-[40px]">
    {platforms.map((platform, index) => (
      <a
        key={index}
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className="platform-link"
      >
        <img
          src={platform.icon}
          alt={`${platform.type} icon`}
          className="platform-icon"
        />
      </a>
    ))}
  </div>
);

const Projects = ({ darkMode, h }) => {
  console.log("Rendering Home with darkMode:", darkMode);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(entries);
  const [isAnimating, setIsAnimating] = useState(false);

  const timeoutRef = useRef(null);

  const timeRunning = 1000;
  const timeAutoNext = 1000;

  const moveSlide = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (direction === "next") {
      setSlides((prevSlides) => {
        const updatedSlides = [...prevSlides];
        updatedSlides.push(updatedSlides.shift());
        return updatedSlides;
      });
    } else if (direction === "prev") {
      setSlides((prevSlides) => {
        const updatedSlides = [...prevSlides];
        updatedSlides.unshift(updatedSlides.pop());
        return updatedSlides;
      });
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, timeRunning);
  };

  const handleNext = () => moveSlide("next");
  const handlePrev = () => moveSlide("prev");

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, timeAutoNext);

    return () => clearTimeout(timeoutRef.current);
  }, [slides]);

  return (
    <div className="container mx-auto  min-h-screen">
      <div className="carousel">
        <div className={`list mt-[10vh] md:mt-[14vh] `}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`item ${index === 0 ? "active" : ""}`}
            >
              <div className="content max-w-[60vw]">
                <div
                  className={`author ${
                    darkMode ? "text-white" : "text-black "
                  }`}
                >
                  Projects
                </div>
                <div className="topic">{slide.label}</div>
                <div
                  className={`title ${darkMode ? "text-white" : "text-black"}`}
                >
                  {slide.title}
                </div>
                <div
                  className={`desc my-4 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <ul className="list-disc pl-5">
                    {slide.desc.map((point, idx) => (
                      <h1 className="md:text-lg text-[15px]" key={idx}>
                        {point}
                      </h1>
                    ))}
                  </ul>
                </div>

                <PlatformLinks platforms={slide.platforms} />
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`item ${index === currentSlide ? "active" : ""} `}
            >
              <div className="content">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-contain py-3"
                />
                <div
                  className={`title ${
                    darkMode ? "text-white" : "text-black"
                  } text-center `}
                >
                  {slide.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`arrows ${darkMode ? "text-white" : "text-black"}`}>
          <button
            className={` ${darkMode ? "bg-[#043927]" : "text-black"}`}
            id="prev"
            onClick={handlePrev}
            disabled={isAnimating}
          >
            ⇐
          </button>
          <button id="next" onClick={handleNext} disabled={isAnimating}>
            ⇒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;