import React from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Image,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaOm } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const About = ({ data }) => {
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.9)");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("#8B4513", "#F5DEB3");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionBox
      id="about"
      bg="url('/yoga-bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionFlex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1200px"
        mx="auto"
        gap={{ base: 8, md: 12 }}
        variants={itemVariants}
      >
        {/* About Us Text Section */}
        <MotionFlex
          flex="1"
          direction="column"
          bg={bgColor}
          p={{ base: 6, md: 10 }}
          borderRadius="lg"
          boxShadow="xl"
          maxW={{ base: "100%", md: "600px" }}
          variants={itemVariants}
        >
          <VStack spacing={6} align="flex-start">
            <MotionFlex alignItems="center">
              <Icon as={FaOm} color={accentColor} fontSize="4xl" mr={4} />
              <MotionText
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                color={textColor}
                variants={itemVariants}
              >
                About Us
              </MotionText>
            </MotionFlex>

            <MotionText color={textColor} fontSize={{ base: "lg", md: "xl" }} variants={itemVariants}>
              {data.paragraph}
            </MotionText>

            <MotionFlex direction="column" mt={4} variants={itemVariants}>
              {data.Why.map((item, index) => (
                <MotionFlex key={index} alignItems="center" mb={4} whileHover={{ translateX: 10 }}>
                  <Icon as={FaOm} color={accentColor} fontSize="xl" mr={3} />
                  <Text color={textColor} fontSize={{ base: "md", md: "lg" }} fontWeight="medium">
                    {item}
                  </Text>
                </MotionFlex>
              ))}
            </MotionFlex>
          </VStack>
        </MotionFlex>

        {/* Yoga Image */}
        <MotionBox flexShrink={0} variants={itemVariants}>
          <Box
            width={{ base: "250px", md: "400px" }}
            height={{ base: "250px", md: "400px" }}
            borderRadius="full"
            overflow="hidden"
            boxShadow="xl"
          >
            <MotionImage
              src="/crown.webp"
              alt="Yoga pose"
              objectFit="cover"
              width="100%"
              height="100%"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </Box>
        </MotionBox>
      </MotionFlex>
    </MotionBox>
  );
};

export default About;