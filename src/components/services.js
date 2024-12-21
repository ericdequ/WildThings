import React from "react";
import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Custom SVG Background
const BackgroundPattern = () => (
  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(233,216,253,0.1)" />
        <stop offset="50%" stopColor="rgba(233,216,253,0.05)" />
        <stop offset="100%" stopColor="rgba(233,216,253,0.1)" />
        <animate attributeName="x1" values="0%;100%;0%" dur="20s" repeatCount="indefinite" />
        <animate attributeName="y1" values="0%;100%;0%" dur="25s" repeatCount="indefinite" />
      </linearGradient>
      
      <pattern id="yogaPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <g className="fill-none stroke-current text-purple-200" opacity="0.05">
          <circle cx="50" cy="50" r="40">
            <animate attributeName="r" values="40;42;40" dur="15s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="30">
            <animate attributeName="r" values="30;32;30" dur="10s" repeatCount="indefinite" />
          </circle>
          <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="30s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#yogaPattern)" />
    <rect width="100%" height="100%" fill="url(#purpleGlow)" />
  </svg>
);

// Custom Yoga Icons Component
const ServiceIcon = ({ type }) => {
  const icons = {
    "fa fa-lotus": (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
        <circle className="fill-current" cx="50" cy="50" r="40" opacity="0.2" />
        <path
          className="fill-current"
          d="M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 55c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
        <path
          className="fill-current"
          d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"
        >
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    ),
    "fa fa-spa": (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
        <path
          className="fill-current"
          d="M50 20c-5 20-20 30-20 45 0 11 9 20 20 20s20-9 20-20c0-15-15-25-20-45z"
        >
          <animate
            attributeName="d"
            values="M50 20c-5 20-20 30-20 45 0 11 9 20 20 20s20-9 20-20c0-15-15-25-20-45z;
                    M50 25c-5 15-20 25-20 40 0 11 9 20 20 20s20-9 20-20c0-15-15-25-20-40z;
                    M50 20c-5 20-20 30-20 45 0 11 9 20 20 20s20-9 20-20c0-15-15-25-20-45z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    ),
    "fa fa-yin-yang": (
      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
        <g className="fill-current">
          <circle cx="50" cy="50" r="40">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>
          <path d="M50 10c22.1 0 40 17.9 40 40s-17.9 40-40 40S10 72.1 10 50s17.9-40 40-40z">
            <animate
              attributeName="opacity"
              values="1;0.7;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    )
  };
  
  return icons[type] || icons["fa fa-lotus"];
};

const Services = ({ data }) => {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      position="relative"
      overflow="hidden"
      bg="rgba(44, 22, 81, 1)"
      backdropFilter="blur(8px)"
    >

      {/* Content Container */}
      <MotionFlex
        direction="column"
        align="center"
        maxW="1200px"
        mx="auto"
        position="relative"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <MotionFlex
          direction="column"
          alignItems="center"
          mb={{ base: 12, md: 16 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
            mb={6}
            textShadow="0 2px 4px rgba(0,0,0,0.2)"
          >
            Our Services
          </Text>
          <Box
            w={{ base: "60px", md: "80px" }}
            h="2px"
            bg="purple.200"
            borderRadius="full"
            opacity={0.8}
          />
        </MotionFlex>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: 8, md: 10 }}
          w="full"
        >
          {data.map((service, index) => (
            <MotionBox
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Flex
                direction="column"
                align="center"
                p={{ base: 8, md: 10 }}
                bg="rgba(255, 255, 255, 0.05)"
                borderRadius="xl"
                backdropFilter="blur(8px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                position="relative"
                overflow="hidden"
                role="group"
                height="100%"
                transition="all 0.3s"
                _hover={{
                  bg: "rgba(255, 255, 255, 0.1)",
                  borderColor: "purple.200",
                }}
              >
                {/* Glow Effect */}
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
                  color="purple.200"
                  mb={6}
                  transform="scale(1)"
                  transition="transform 0.3s"
                  _groupHover={{ transform: "scale(1.1)" }}
                >
                  <ServiceIcon type={service.icon} />
                </Box>

                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  mb={4}
                  color="white"
                  textAlign="center"
                >
                  {service.name}
                </Text>

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="whiteAlpha.900"
                  textAlign="center"
                  opacity={0.9}
                >
                  {service.text}
                </Text>
              </Flex>
            </MotionBox>
          ))}
        </Grid>
      </MotionFlex>
    </Box>
  );
};

export default Services;