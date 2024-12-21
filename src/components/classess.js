import React from "react";
import {
  Box,
  Grid,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Custom SVG Feature Icons Component
const FeatureIcon = ({ title }) => {
  const icons = {
    "For All Levels": (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
        <g className="fill-current">
          <circle cx="50" cy="20" r="8" opacity="0.3" />
          <circle cx="50" cy="50" r="12" opacity="0.6" />
          <circle cx="50" cy="80" r="16" opacity="0.9" />
          <path d="M50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 38c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z" />
        </g>
      </svg>
    ),
    "Mind-Body Health": (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
        <g className="fill-current">
          <path d="M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 58c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28z" />
          <path d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 28c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13z" />
        </g>
      </svg>
    ),
    "Diverse Styles": (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
        <g className="fill-current">
          <path d="M25 40c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15 6.7 15 15 15zm0-28c7.2 0 13 5.8 13 13s-5.8 13-13 13-13-5.8-13-13 5.8-13 13-13z" />
          <path d="M75 40c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15 6.7 15 15 15zm0-28c7.2 0 13 5.8 13 13s-5.8 13-13 13-13-5.8-13-13 5.8-13 13-13z" />
          <path d="M50 90c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15 6.7 15 15 15zm0-28c7.2 0 13 5.8 13 13s-5.8 13-13 13-13-5.8-13-13 5.8-13 13-13z" />
        </g>
      </svg>
    ),
    "Supportive Community": (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
        <g className="fill-current">
          <circle cx="50" cy="35" r="15" />
          <circle cx="25" cy="55" r="12" />
          <circle cx="75" cy="55" r="12" />
          <path d="M50 55c-11 0-20 9-20 20h40c0-11-9-20-20-20z" />
          <path d="M25 70c-8.3 0-15 6.7-15 15h30c0-8.3-6.7-15-15-15z" opacity="0.8" />
          <path d="M75 70c-8.3 0-15 6.7-15 15h30c0-8.3-6.7-15-15-15z" opacity="0.8" />
        </g>
      </svg>
    ),
  };
  
  return icons[title] || icons["For All Levels"];
};

const BackgroundPattern = () => (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        {/* Gradient Definitions */}
        <linearGradient id="mistGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(233,216,253,0.1)" />
          <stop offset="50%" stopColor="rgba(233,216,253,0.05)" />
          <stop offset="100%" stopColor="rgba(233,216,253,0.1)" />
          <animate
            attributeName="x1"
            values="0%;100%;0%"
            dur="20s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y1"
            values="0%;100%;0%"
            dur="25s"
            repeatCount="indefinite"
          />
        </linearGradient>
  
        {/* Sacred Geometry Patterns */}
        <pattern id="sacredLotus" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <g className="fill-current text-purple-200" opacity="0.05">
            {/* Central Lotus */}
            <path d="M30 0c-4 4-8 8-12 12 4 4 8 8 12 12 4-4 8-8 12-12-4-4-8-8-12-12z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 30 30"
                to="360 30 30"
                dur="30s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* Overlapping Circles */}
            <circle cx="30" cy="30" r="15">
              <animate
                attributeName="r"
                values="15;17;15"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="30" cy="30" r="25">
              <animate
                attributeName="r"
                values="25;28;25"
                dur="15s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </pattern>
  
        {/* Geometric Background Pattern */}
        <pattern id="geometricFlow" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <g className="fill-none stroke-current text-purple-200" opacity="0.03">
            {/* Sacred Hexagon */}
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="45s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* Flower of Life Elements */}
            <circle cx="50" cy="50" r="40">
              <animate
                attributeName="r"
                values="40;42;40"
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="50" cy="50" r="30">
              <animate
                attributeName="r"
                values="30;32;30"
                dur="15s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </pattern>
  
        {/* Flowing Energy Lines */}
        <pattern id="energyFlow" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <g className="fill-none stroke-current text-purple-200" opacity="0.04">
            <path d="M0 100 Q50 80 100 100 T200 100">
              <animate
                attributeName="d"
                values="M0 100 Q50 80 100 100 T200 100;
                        M0 100 Q50 120 100 100 T200 100;
                        M0 100 Q50 80 100 100 T200 100"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M0 150 Q50 130 100 150 T200 150">
              <animate
                attributeName="d"
                values="M0 150 Q50 130 100 150 T200 150;
                        M0 150 Q50 170 100 150 T200 150;
                        M0 150 Q50 130 100 150 T200 150"
                dur="25s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </pattern>
      </defs>
  
      {/* Background Layers */}
      <rect width="100%" height="100%" fill="url(#geometricFlow)" />
      <rect width="100%" height="100%" fill="url(#sacredLotus)" />
      <rect width="100%" height="100%" fill="url(#energyFlow)" />
      <rect width="100%" height="100%" fill="url(#mistGradient)" />
      
      {/* Animated Particle Layer */}
      <g className="particles">
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            r="2"
            className="fill-current text-purple-200"
            opacity="0.1"
          >
            <animate
              attributeName="cx"
              from={`${Math.random() * 1000}`}
              to={`${Math.random() * 1000}`}
              dur={`${15 + Math.random() * 25}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from={`${Math.random() * 600}`}
              to={`${Math.random() * 600}`}
              dur={`${10 + Math.random() * 20}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.1;0.3;0.1"
              dur={`${5 + Math.random() * 10}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  );

const Classess = ({ data }) => {
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.1)");
  const textColor = useColorModeValue("white", "gray.100");
  const accentColor = useColorModeValue("purple.200", "purple.300");

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
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
      },
    },
  };

  return (
    <Box
      as="section"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      position="relative"
      overflow="hidden"
      bg="rgba(44, 22, 81, 1)"
      backdropFilter="blur(8px)"
      id="classes"
    >
     

      {/* Animated mist effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="20%"
        bgGradient="linear(to-b, rgba(255,255,255,0.1), transparent)"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />

      <MotionFlex
        direction="column"
        align="center"
        maxW="1200px"
        mx="auto"
        position="relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <MotionFlex
          direction="column"
          alignItems="center"
          mb={{ base: 12, md: 16 }}
          variants={cardVariants}
        >
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color={textColor}
            textAlign="center"
            mb={6}
            textShadow="0 2px 4px rgba(0,0,0,0.2)"
          >
            Our Classes
          </Text>
          <Box
            w={{ base: "60px", md: "80px" }}
            h="2px"
            bg={accentColor}
            borderRadius="full"
            opacity={0.8}
          />
        </MotionFlex>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={{ base: 8, md: 10 }}
          w="full"
        >
          {data.map((feature, index) => (
            <MotionBox
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Flex
                direction="column"
                align="center"
                p={{ base: 8, md: 10 }}
                bg={cardBg}
                borderRadius="xl"
                backdropFilter="blur(8px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                position="relative"
                overflow="hidden"
                role="group"
                height="100%"
              >
                {/* Animated glow effect */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="120%"
                  h="120%"
                  bg="radial-gradient(circle, rgba(233,216,253,0.1) 0%, transparent 70%)"
                  opacity={0}
                  transition="opacity 0.3s"
                  _groupHover={{ opacity: 1 }}
                />

                <Box
                  color={accentColor}
                  mb={6}
                  transition="transform 0.3s"
                  _groupHover={{ transform: "scale(1.1)" }}
                >
                  <FeatureIcon title={feature.title} />
                </Box>

                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  mb={4}
                  color={textColor}
                  textAlign="center"
                >
                  {feature.title}
                </Text>

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color={textColor}
                  textAlign="center"
                  opacity={0.9}
                >
                  {feature.text}
                </Text>
              </Flex>
            </MotionBox>
          ))}
        </Grid>
      </MotionFlex>
    </Box>
  );
};

export default Classess;