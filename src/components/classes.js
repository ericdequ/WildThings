import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Text,
  Icon,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaOm, FaLeaf, FaSpa, FaYinYang, FaHiking } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const iconMapping = {
  "fa fa-lotus": FaOm,
  "fa fa-spa": FaSpa,
  "fa fa-yin-yang": FaYinYang,
  "fa fa-om": FaLeaf,
  "fa fa-hiking": FaHiking,
};

const Classes = ({ data }) => {
  const bgColor = useColorModeValue(
    "linear-gradient(135deg, #8B4513 0%, #DEB887 100%)",
    "linear-gradient(135deg, #2D3748 0%, #1A202C 100%)",
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("#1A202C", "#FFFFFF");
  const accentColor = useColorModeValue("#CD853F", "#F5DEB3");
  const shadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(255, 255, 255, 0.1)",
  );

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  return (
    <div id="classes">
      <Box
        as="section"
        py={{ base: "16", md: "24" }}
        px={{ base: "4", md: "8" }}
        bg={bgColor}
      >
        <Flex direction="column" align="center" maxW="1200px" mx="auto">
          <MotionFlex
            direction="column"
            alignItems="center"
            mb={{ base: "12", md: "16" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MotionImage
              src="/circlelogo.png"
              alt="Warriors and Wildthings Yoga Logo"
              w={{ base: "120px", md: "160px" }}
              h="auto"
              mb={4}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              textAlign="center"
              color={textColor}
              textTransform="uppercase"
              letterSpacing="wide"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: { base: "60px", md: "80px", lg: "100px" },
                height: "4px",
                bg: accentColor,
                borderRadius: "full",
              }}
            >
              Our Classes
            </Text>
          </MotionFlex>
          <MotionGrid
            ref={ref}
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={{ base: "8", md: "10" }}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {data.map((yogaClass, index) => (
              <MotionBox
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: `0 20px 30px -10px ${shadowColor}`,
                  translateY: -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <MotionFlex
                  direction="column"
                  align="center"
                  justify="center"
                  p={{ base: "8", md: "10" }}
                  borderRadius="xl"
                  bg={cardBg}
                  boxShadow="lg"
                  height="100%"
                  position="relative"
                  overflow="hidden"
                  role="group"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgImage="url('/mandala.svg')"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="120%"
                    opacity={0.03}
                    transition="all 0.3s ease"
                    _groupHover={{ opacity: 0.08, bgSize: "140%" }}
                    zIndex={0}
                  />
                  <Icon
                    as={iconMapping[yogaClass.icon]}
                    boxSize={{ base: "12", md: "16" }}
                    mb={{ base: "5", md: "6" }}
                    color={accentColor}
                    zIndex={1}
                    transition="all 0.3s ease"
                    _groupHover={{ transform: "scale(1.1)" }}
                  />
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    mb={{ base: "4", md: "5" }}
                    color={textColor}
                    textAlign="center"
                    zIndex={1}
                    transition="all 0.3s ease"
                    _groupHover={{ transform: "scale(1.05)" }}
                  >
                    {yogaClass.name}
                  </Text>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color={useColorModeValue("gray.600", "gray.300")}
                    textAlign="center"
                    zIndex={1}
                    transition="all 0.3s ease"
                    _groupHover={{ color: textColor }}
                  >
                    {yogaClass.text}
                  </Text>
                </MotionFlex>
              </MotionBox>
            ))}
          </MotionGrid>
        </Flex>
      </Box>
    </div>
  );
};

export default Classes;
