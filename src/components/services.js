import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Text,
  Icon,
  Flex,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaOm, FaSpa, FaYinYang, FaLeaf, FaHiking } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionGrid = motion(Grid);

const iconMapping = {
  "fa fa-lotus": FaOm,
  "fa fa-spa": FaSpa,
  "fa fa-yin-yang": FaYinYang,
  "fa fa-om": FaLeaf,
  "fa fa-hiking": FaHiking,
};

const Services = ({ data }) => {
  const bgColor = useColorModeValue(
    "linear-gradient(135deg, #8B4513 0%, #DEB887 100%)",
    "linear-gradient(135deg, #2D3748 0%, #1A202C 100%)",
  );
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.9)",
    "rgba(45, 55, 72, 0.9)",
  );
  const textColor = useColorModeValue("gray.800", "white");
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

  const itemVariants = {
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
    <Box
      ref={ref}
      as="section"
      id="services"
      py={{ base: "16", md: "24", lg: "32" }}
      px={{ base: "4", md: "8", lg: "12" }}
      bg={bgColor}
    >
      <VStack
        spacing={{ base: 12, md: 16 }}
        align="stretch"
        maxWidth="1200px"
        mx="auto"
      >
        <MotionFlex
          direction="column"
          align="center"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            color={textColor}
            textTransform="uppercase"
            letterSpacing="wide"
            textAlign="center"
            mb={4}
          >
            Our Services
          </Text>
          <Box
            width={{ base: "60px", md: "80px", lg: "100px" }}
            height="4px"
            bg={accentColor}
            borderRadius="full"
            mb={{ base: 8, md: 12 }}
          />
        </MotionFlex>

        <MotionGrid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 8, md: 10 }}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {data.map((item, index) => (
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
                  bgImage="url('/lotus.svg')"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="120%"
                  opacity={0.03}
                  transition="all 0.3s ease"
                  _groupHover={{ opacity: 0.08, bgSize: "140%" }}
                  zIndex={0}
                />
                <Icon
                  as={iconMapping[item.icon]}
                  boxSize={{ base: 12, md: 16 }}
                  mb={{ base: 5, md: 6 }}
                  color={accentColor}
                  zIndex={1}
                  transition="all 0.3s ease"
                  _groupHover={{ transform: "scale(1.1) rotate(5deg)" }}
                  _groupActive={{ transform: "scale(1.1)" }}
                />
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  mb={{ base: 3, md: 4 }}
                  color={textColor}
                  textAlign="center"
                  zIndex={1}
                  transition="all 0.3s ease"
                  _groupHover={{ transform: "scale(1.05)" }}
                >
                  {item.name}
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={useColorModeValue("gray.600", "gray.300")}
                  textAlign="center"
                  zIndex={1}
                  transition="all 0.3s ease"
                  _groupHover={{ color: textColor }}
                >
                  {item.text}
                </Text>
              </MotionFlex>
            </MotionBox>
          ))}
        </MotionGrid>
      </VStack>
    </Box>
  );
};

export default Services;
