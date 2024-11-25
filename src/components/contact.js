import React from "react";
import {
  Box,
  Text,
  Button,
  Icon,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaInstagram, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Link from "next/link";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Contact = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="contact"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      bg="linear-gradient(135deg, #8B4513 0%, #DEB887 100%)"
    >
      <Flex
        direction="column"
        align="center"
        maxWidth="1200px"
        mx="auto"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="2xl"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
      >
        <MotionBox
          variants={itemVariants}
          w="full"
          py={12}
          px={8}
          textAlign="center"
          borderBottom="1px solid"
          borderColor="rgba(255, 255, 255, 0.2)"
        >
          <MotionText
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="white"
            mb={4}
          >
            {props.Title || "Connect with Us"}
          </MotionText>
          <MotionText fontSize={{ base: "lg", md: "xl" }} color="white">
            {props.Description ||
              "We're here to answer any questions you may have about our yoga classes and services."}
          </MotionText>
        </MotionBox>

        <VStack spacing={8} w="full" py={12} px={8}>
         

          <HStack spacing={6} justifyContent="center" flexWrap="wrap">
            <Link href={`tel:${props.data?.phone || ""}`}>
              <MotionButton
                variant="outline"
                size="lg"
                color="white"
                borderColor="white"
                _hover={{
                  bg: "white",
                  color: "#8B4513",
                }}
                leftIcon={<Icon as={FaPhone} />}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {props.data?.phonedis || "Call Us"}
              </MotionButton>
            </Link>

            <Link href={`mailto:${props.data?.email || ""}`}>
              <MotionButton
                variant="outline"
                size="lg"
                color="white"
                borderColor="white"
                _hover={{
                  bg: "white",
                  color: "#8B4513",
                }}
                leftIcon={<Icon as={FaEnvelope} />}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Us
              </MotionButton>
            </Link>

            <Link
              href={props.data?.Instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MotionButton
                variant="outline"
                size="lg"
                color="white"
                borderColor="white"
                _hover={{
                  bg: "white",
                  color: "#8B4513",
                }}
                leftIcon={<Icon as={FaInstagram} />}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow on Instagram
              </MotionButton>
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </MotionBox>
  );
};

export default Contact;