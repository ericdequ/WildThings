import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import About from "../About/about";
import Contact from "../components/contact";
import Classes from "../Classes/classes";
import Classess from "../Classes/classess";
import Header from "../HeadER/header";
import Navigation from "../Navigation/navigation";
import Navigationn from "../Navigation/navigationn";
import Navigationnn from "../Navigation/navigationnn";
import Navigationnnn from "../Navigation/navigationnnn";
import SEOComponent from "../SEOComponent";
import Services from "../services";

import data from "../data/data.json";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <SEOComponent
        title="Warriors and Wildthings Yoga | Find Your Inner Peace"
        description="Experience the transformative power of yoga at Warriors and Wildthings Yoga in Atlanta. Join our vibrant community and discover harmony of body, mind, and spirit."
        canonicalURL="https://www.warriorsandwildthings.com/"
        image="https://www.warriorsandwildthings.com/logo.png"
        video="/yoga-intro.mp4"
        keywords="Yoga, Atlanta, Warriors and Wildthings, Meditation, Mindfulness, Asana, Vinyasa, Hatha, Yin, Restorative, Yoga Studio, Yoga Classes, Yoga Workshops, Yoga Retreats, Yoga Teacher Training, Yoga Community, Wellness, Fitness, Health, Inner Peace, Balance, Harmony, Mind-Body Connection, Chakras, Pranayama, Yoga Philosophy, Yoga Lifestyle, Yoga Therapy, Yoga for Beginners, Advanced Yoga, Yoga Poses, Yoga Sequences, Yoga Inspiration, Yoga Quotes, Yoga Music, Yoga Accessories, Yoga Mats, Yoga Props, Yoga Blocks, Yoga Straps, Yoga Bolsters, Yoga Blankets, Yoga Clothing, Yoga Apparel, Yoga Pants, Yoga Tops, Yoga Bras, Yoga Socks, Yoga Towels, Yoga Bags"
      />

      {/* Background Image */}
      <Box
      className="w-full h-full flex flex-col"
        bgImage="url('/yoga-bg.webp')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        minH="100vh"
        display="flex"
        flexDirection="column"
      >
        <AnimateSection>
          <Navigationnn />
        </AnimateSection>
        {/* Header Crown */}

        <AnimateSection>
          <Header data={data.Header} />
        </AnimateSection>

        {/* Features (Sliding in from the left) throat */}
        <AnimateSection from="left" id="classes">
          <Classess data={data.Features} />
        </AnimateSection>

        {/* About Section heart */}
        <AnimateSection>
          <About data={data.About} />
        </AnimateSection>

        {/* Services (Sliding in from the right) yellow*/}
        <AnimateSection from="right">
          <Services data={data.Services} />
        </AnimateSection>

        {/* Contact Section */}
        <AnimateSection>
          <Contact data={data.Contact} />
        </AnimateSection>
      </Box>
    </>
  );
}

// Modified AnimateSection Component for Different Animations
const AnimateSection = ({ children, from = "bottom" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Custom variants for sliding in from left or right
  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: from === "left" ? -100 : from === "right" ? 100 : 0,
      y: from === "bottom" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};
