import React, { useEffect, useState } from "react";
import TestimonialSlider from "./Slider";
import { animated as a, useInView, useTrail } from "react-spring";
const TestimonialSection = () => {
  const [visited, setVisited] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const trails = useTrail(4, {
    opacity: visited ? 1 : 0,
    transform: visited ? "translateY(0%)" : "translateY(2%)",
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    if (inView) setVisited(true);
  }, [inView]);
  return (
    <div ref={ref} className="w-full flex flex-col items-center bg-gray-100">
      <div className="flex flex-col gap-y-2 w-full px-6 md:px-0 sm:max-w-[1280px] xl:max-w-[1400px]">
        <section className="flex flex-col w-full items-center gap-y-2">
          <a.p
            style={trails[0]}
            className="text-sm xl:text-lg md:text-base text-violet-800 font-light"
          >
            WE PRIDE OURSELVES IN DELIVERING EXEMPLARY CLIENT SERVICE
          </a.p>
          <a.h1
            style={trails[1]}
            className="text-xl xl:text-3xl md:text-2xl font-semibold"
          >
            Our Clients
          </a.h1>
          <a.p
            style={trails[2]}
            className="text-xs xl:text-base max-w-[800px] text-center font-regular leading-5 text-gray-700 mt-2"
          >
            Discover the success stories of our clients and learn how LSWD
            Consulting has been able to take the Business Operations of our
            Federal and Commercial clients alike to the next level.
          </a.p>
        </section>
        <a.section
          style={trails[3]}
          className="flex justify-center items-center overflow-x-hidden"
        >
          <TestimonialSlider
            clientTestimonials={[
              {
                link: "https://bmw-services.vercel.app/",
                logo: "https://bmw-services.vercel.app/logo.webp",
                name: "Brandon Wesley",
                role: "Owner, BMW Services",
                highlight:
                  "LSWD's expertise in web design transformed our online presence.",
                quote:
                  "With LSWD's dedicated team, our website not only looks modern and compelling but also offers an intuitive user experience. Their professionalism and attention to detail exceeded our expectations.",
                image:
                  "https://www.quantumcybersolutions.com/bmw/img/brando.webp",
              },
              {
                link: "https://www.quantumcybersolutions.com/",
                logo: "https://www.quantumcybersolutions.com/QCS-logo.webp",
                name: "Ric deQuantum",
                role: "Owner, Quantum Cyber Solutions",
                highlight:
                  "LSWD's approach to web development is unparalleled in the industry.",
                quote:
                  "Their dedication to crafting unique digital solutions ensured our website is not only functional but also captivating to our audience. We've seen a significant increase in user engagement since the launch.",
                image: "https://www.quantumcybersolutions.com/QCS-logo.webp",
              },
              {
                link: "https://diamondback.vercel.app/",
                logo: "https://diamondback.vercel.app/logoclear.webp",
                name: "Cade Shier",
                role: "Owner, Diamondback Epoxy Flooring",
                highlight:
                  "Partnering with LSWD skyrocketed our brand's digital footprint.",
                quote:
                  "From the initial concept to the final implementation, LSWD provided exceptional insights and technical skills, ensuring our website stands out in the digital space.",
                image: "https://diamondback.vercel.app/logosimple.webp",
              },
              {
                link: "https://www.ericdequevedo.com/",
                logo: "https://www.ericdequevedo.com/profilepic.webp",
                name: "Eric deQuevedo",
                role: "Client, Eric deQuevedo Personal Profile",
                highlight:
                  "LSWD's web development expertise brought my personal profile to life.",
                quote:
                  "The personal profile page LSWD built for me not only showcases my professional journey but also reflects my personality. The intuitive design and seamless user experience make it a joy for visitors.",
                image:
                  "https://www.ericdequevedo.com/profilepic.webp",
              },
              {
                link: "https://quantumlearn.vercel.app/",
                logo: "https://quantumlearn.vercel.app/_next/image?url=https%3A%2F%2Fwww.quantumcybersolutions.com%2Fentanglement.webp&w=640&q=75",
                name: "Quantum Cyber Solutions",
                role: "Owner, Quantum Learn",
                highlight:
                  "LSWD delivered an exceptional educational tool for our team.",
                quote:
                  "LSWD built out a tool that not only educates our employees on quantum resources but also provides an engaging and intuitive learning experience.",
                image:
                  "https://quantumlearn.vercel.app/_next/image?url=https%3A%2F%2Fwww.quantumcybersolutions.com%2Fentanglement.webp&w=640&q=75",
              },
              {
                "link": "https://cflarborcare.vercel.app/",
                "logo": "https://cflarborcare.vercel.app/logo.jpg",
                "name": "Noah Quintana",
                "role": "Owner, CFL Arbor Care",
                "highlight": "Lucid Software Development transformed our online presence, leading to unprecedented growth for CFL Arbor Care.",
                "quote": "Their commitment to delivering clear, transparent, and efficient digital solutions took our website to the next level. We’ve experienced remarkable user engagement and a surge in business since our site went live.",
                "image": "https://cflarborcare.vercel.app/pics/9.webp"
              },
              {
                link: "https://www.prestigedancefloorsolutions.com/",
                logo: "https://www.prestigedancefloorsolutions.com/logo.png",
                name: "Carter Holt",
                role: "Owner, Prestige Dance Floor Solutions",
                highlight: "LSWD delivered a sleek and functional website that truly reflects our brand.",
                quote: "Working with LSWD was a game-changer for us. The website they built not only highlights our unique offerings in custom dance floor design but also provides an intuitive user experience that has drawn in more clients than we anticipated. Their attention to detail and creative approach exceeded our expectations.",
                image: "https://www.prestigedancefloorsolutions.com/logo.png",
              }
              
              
            ]}
          />
        </a.section>
      </div>
    </div>
  );
};

export default TestimonialSection;

