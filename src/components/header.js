import React from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export default function Header({ data }) {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.8]); // Adjusted for a more subtle fade
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]); // Adjusted for a more subtle scale effect
  const buttonSize = useBreakpointValue({ base: "lg", md: "xl" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut", staggerChildren: 0.4 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <MotionBox
      id="page-top"
      position="relative"
      minHeight={{ base: "calc(100vh - 80px)", md: "100vh" }} // Adjusted for mobile
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      <MotionBox
        as="img"
        src="/lake.webp"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={1}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        style={{ opacity, filter: "brightness(0.7) saturate(1.2)" }}
      />

      {/* Overlay Gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="linear-gradient(180deg, rgba(242,209,132,0.4) 0%, rgba(212,175,55,0.4) 100%)"
        zIndex={0}
      />

      {/* Content */}
      <MotionBox
        textAlign="center"
        zIndex={1}
        p={{ base: 4, sm: 6, md: 12 }}
        maxWidth={{ base: "100%", md: "900px" }}
        mx="auto"
        style={{ scale }}
      >
        <MotionHeading
          as="h1"
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          color="white"
          mb={{ base: 4, md: 8 }}
          fontFamily="'Playfair Display', serif"
          textShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
          variants={contentVariants}
          letterSpacing="wide"
        >
          {data.title}
        </MotionHeading>
        <MotionText
          fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          color="white"
          mb={{ base: 4, md: 8 }}
          fontWeight="medium"
          textShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
          variants={contentVariants}
        >
          {data.motto}
        </MotionText>
        <MotionText
          fontSize={{ base: "md", sm: "lg", md: "xl" }}
          color="white"
          maxWidth={{ base: "100%", md: "700px" }}
          mx="auto"
          mb={{ base: 8, md: 12 }}
          textShadow="0 2px 4px rgba(0, 0, 0, 0.5)"
          variants={contentVariants}
        >
          {data.paragraph}
        </MotionText>
      </MotionBox>
    </MotionBox>
  );
}
