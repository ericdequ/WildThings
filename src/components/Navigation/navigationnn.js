import React from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  Image,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion(Link);
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const navLinks = [
  { text: "Classes", href: "/#classes" },
  { text: "About", href: "/#about" },
  { text: "Services", href: "/#services" },
  { text: "Contact", href: "/#contact" },
];

// Animated Background SVG Component
const AnimatedBackground = () => (
  <Box
    position="absolute"
    top={0}
    left={0}
    right={0}
    bottom={0}
    overflow="hidden"
    opacity={0.15}
    zIndex={0}
  >
    <svg
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#9F7AEA', stopOpacity: 0.5 }} />
          <stop offset="50%" style={{ stopColor: '#B794F4', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#9F7AEA', stopOpacity: 0.5 }} />
        </linearGradient>
        
        {/* Animated wave paths */}
        <path
          id="wavePath1"
          d="M0 100 C 100 50, 200 150, 300 100 S 400 50, 500 100 S 600 150, 700 100 S 800 50, 900 100 S 1000 150, 1100 100"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-300 0"
            to="0 0"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
        
        <path
          id="wavePath2"
          d="M0 100 C 100 150, 200 50, 300 100 S 400 150, 500 100 S 600 50, 700 100 S 800 150, 900 100 S 1000 50, 1100 100"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-300 0"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        {/* Floating particles filter */}
        <filter id="particleFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" seed="1" />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </defs>

      {/* Background waves */}
      <g className="waves">
        <use href="#wavePath1" stroke="url(#grad1)" strokeWidth="2" fill="none" filter="url(#particleFilter)" />
        <use href="#wavePath2" stroke="url(#grad1)" strokeWidth="2" fill="none" filter="url(#particleFilter)" />
      </g>

      {/* Floating particles */}
      <g className="particles">
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            r="2"
            fill="#B794F4"
            opacity="0.5"
          >
            <animate
              attributeName="cx"
              from={`${Math.random() * 1000}`}
              to={`${Math.random() * 1000}`}
              dur={`${10 + Math.random() * 20}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from={`${Math.random() * 300}`}
              to={`${Math.random() * 300}`}
              dur={`${5 + Math.random() * 10}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  </Box>
);

const Navigationnn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      as="nav"
      bgGradient="linear(135deg, purple.900 0%, purple.800 50%, purple.900 100%)"
      py={4}
      px={6}
      position="sticky"
      top={0}
      width="full"
      zIndex="sticky"
      className="backdrop-blur-sm bg-opacity-90"
      boxShadow="0 4px 20px rgba(89, 46, 169, 0.2)"
      color="white"
      overflow="hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />
      
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
        maxW="1200px"
        w="full"
        position="relative"
        zIndex={1}
      >
        <MotionLink
          href="/#page-top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box 
            boxSize={{ base: "120px", md: "160px" }} 
            p={3}
            position="relative"
          >
            <Image
              src="/logofunfont.png"
              alt="Warriors and Wildthings Yoga logo"
              objectFit="contain"
              width="100%"
              height="auto"
            />
            {/* Animated logo aura */}
            <MotionBox
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              borderRadius="full"
              border="2px solid"
              borderColor="purple.200"
              opacity={0.3}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </Box>
        </MotionLink>

        {isMobile ? (
          <>
            <IconButton
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
              aria-label="Open menu"
              _hover={{ bg: "whiteAlpha.200" }}
              _active={{ bg: "whiteAlpha.300" }}
              size="lg"
              color="white"
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
              <DrawerOverlay />
              <DrawerContent bgGradient="linear(135deg, purple.900 0%, purple.700 50%, purple.900 100%)">
                <AnimatedBackground />
                <DrawerBody position="relative" zIndex={1}>
                  <Flex justify="flex-end" mt={4}>
                    <IconButton
                      icon={<CloseIcon />}
                      onClick={onClose}
                      variant="ghost"
                      aria-label="Close menu"
                      _hover={{ bg: "whiteAlpha.200" }}
                      _active={{ bg: "whiteAlpha.300" }}
                      size="lg"
                      color="white"
                    />
                  </Flex>
                  <MotionFlex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    height="80vh"
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {navLinks.map((link) => (
                      <MotionLink
                        key={link.text}
                        onClick={onClose}
                        href={link.href}
                        className="page-scroll"
                        display="block"
                        fontSize="2xl"
                        fontWeight="bold"
                        my={6}
                        color="white"
                        _hover={{
                          color: "purple.200",
                          textShadow: "0 0 10px rgba(255,255,255,0.8)",
                        }}
                        variants={linkVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.text}
                      </MotionLink>
                    ))}
                  </MotionFlex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <MotionFlex
            align="center"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <MotionLink
                key={link.text}
                href={link.href}
                className="page-scroll"
                mx={4}
                fontSize="lg"
                fontWeight="semibold"
                color="white"
                position="relative"
                _hover={{ color: "purple.200" }}
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.text}
                <MotionBox
                  position="absolute"
                  bottom="-2px"
                  left="0"
                  right="0"
                  height="2px"
                  bg="purple.200"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <MotionBox
                  position="absolute"
                  top="-5px"
                  left="50%"
                  width="4px"
                  height="4px"
                  borderRadius="full"
                  bg="purple.200"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transform: 'translateX(-50%)' }}
                />
              </MotionLink>
            ))}
          </MotionFlex>
        )}
      </Flex>
    </Box>
  );
};

export default Navigationnn;