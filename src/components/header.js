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
  const opacity = useTransform(scrollY, [0, 500], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);
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
      minHeight={{ base: "calc(100vh - 80px)", md: "100vh" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative SVG Wave Background */}
      <Box position="absolute" top={0} left={0} width="100%" height="32" zIndex={2}>
        <svg className="w-full h-full text-white/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current"></path>
        </svg>
      </Box>

      {/* Background Image with Enhanced Gradient */}
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
        style={{ opacity }}
        filter="brightness(0.7) saturate(1.2)"
      />

      {/* Enhanced Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(180deg, rgba(88,28,135,0.3) 0%, rgba(192,132,252,0.2) 100%)"
        zIndex={2}
      />

      {/* Floating Decorative Element */}
      <MotionBox
        position="absolute"
        right="10"
        top="20"
        width="24"
        height="24"
        zIndex={2}
        style={{
          y: useTransform(scrollY, [0, 500], [0, 100]),
          rotate: useTransform(scrollY, [0, 500], [0, 45]),
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-white opacity-20">
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z" className="fill-current"/>
          <path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" className="fill-current"/>
        </svg>
      </MotionBox>

      {/* Content */}
      <MotionBox
        textAlign="center"
        zIndex={3}
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

        {/* CTA Buttons */}
        <MotionBox
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          gap={4}
          justifyContent="center"
          variants={contentVariants}
        >
          <Link href="/#classes" passHref>
            <MotionButton
              
              size={buttonSize}
              bg="white"
              color="purple.900"
              px={8}
              rounded="full"
              fontWeight="semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              _hover={{ bg: "white", transform: "translateY(-2px)" }}
              transition="all 0.3s"
            >
              Join Our Classes
            </MotionButton>
          </Link>
          
          <Link href="/#about" passHref>
            <MotionButton
             
              size={buttonSize}
              variant="outline"
              color="white"
              px={8}
              rounded="full"
              fontWeight="semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              _hover={{ bg: "whiteAlpha.200", transform: "translateY(-2px)" }}
              transition="all 0.3s"
            >
              Learn More
            </MotionButton>
          </Link>
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
}