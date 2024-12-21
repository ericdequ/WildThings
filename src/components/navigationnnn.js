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

// Mist Wave Animation Component
const MistWaves = () => (
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
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="mistGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#E9D8FD', stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: '#D6BCFA', stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: '#E9D8FD', stopOpacity: 0.3 }} />
        </linearGradient>
      </defs>
      
      {/* Gentle mist waves */}
      <path 
        d="M0 20 Q 250 40 500 20 Q 750 0 1000 20 L1000 100 L0 100 Z" 
        fill="url(#mistGradient)"
      >
        <animate
          attributeName="d"
          dur="20s"
          repeatCount="indefinite"
          values="
            M0 20 Q 250 40 500 20 Q 750 0 1000 20 L1000 100 L0 100 Z;
            M0 25 Q 250 45 500 25 Q 750 5 1000 25 L1000 100 L0 100 Z;
            M0 20 Q 250 40 500 20 Q 750 0 1000 20 L1000 100 L0 100 Z"
        />
      </path>
      
      <path 
        d="M0 40 Q 250 60 500 40 Q 750 20 1000 40 L1000 100 L0 100 Z" 
        fill="url(#mistGradient)"
        opacity="0.5"
      >
        <animate
          attributeName="d"
          dur="15s"
          repeatCount="indefinite"
          values="
            M0 40 Q 250 60 500 40 Q 750 20 1000 40 L1000 100 L0 100 Z;
            M0 45 Q 250 65 500 45 Q 750 25 1000 45 L1000 100 L0 100 Z;
            M0 40 Q 250 60 500 40 Q 750 20 1000 40 L1000 100 L0 100 Z"
        />
      </path>
    </svg>
  </Box>
);

const Navigationnnn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="nav"
      bg="rgba(44, 25, 71, 0.5)"
      backdropFilter="blur(8px)"
      py={4}
      px={6}
      position="fixed"
      top={0}
      width="full"
      zIndex="sticky"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
      color="white"
      overflow="hidden"
    >
      <MistWaves />
      
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
            {/* Glowing aura effect */}
            <MotionBox
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              borderRadius="full"
              bg="rgba(233, 216, 253, 0.1)"
              filter="blur(10px)"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
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
              size="lg"
              color="white"
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
              <DrawerOverlay />
              <DrawerContent bg="rgba(44, 25, 71, 0.95)">
                <DrawerBody>
                  <Flex justify="flex-end" mt={4}>
                    <IconButton
                      icon={<CloseIcon />}
                      onClick={onClose}
                      variant="ghost"
                      aria-label="Close menu"
                      _hover={{ bg: "whiteAlpha.200" }}
                      size="lg"
                      color="white"
                    />
                  </Flex>
                  <MotionFlex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    height="80vh"
                    initial="hidden"
                    animate="visible"
                  >
                    {navLinks.map((link, index) => (
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: index * 0.1 }
                        }}
                        whileHover={{
                          scale: 1.05,
                          textShadow: "0 0 8px rgba(255,255,255,0.8)"
                        }}
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
          <MotionFlex align="center" gap={8}>
            {navLinks.map((link, index) => (
              <MotionLink
                key={link.text}
                href={link.href}
                className="page-scroll"
                fontSize="lg"
                fontWeight="medium"
                color="white"
                position="relative"
                textShadow="0 2px 4px rgba(0,0,0,0.2)"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(255,255,255,0.8)"
                }}
              >
                {link.text}
                <MotionBox
                  position="absolute"
                  bottom="-2px"
                  left={0}
                  right={0}
                  height="1px"
                  bg="rgba(255,255,255,0.6)"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </MotionLink>
            ))}
          </MotionFlex>
        )}
      </Flex>
    </Box>
  );
};

export default Navigationnnn;