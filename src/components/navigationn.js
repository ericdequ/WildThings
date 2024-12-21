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

const Navigationn = () => {
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

  // Sacred geometry background pattern
  const SacredGeometryPattern = () => (
    <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.1} overflow="hidden">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <pattern id="sacredPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 0L20 10L10 20L0 10Z" fill="currentColor"/>
            <circle cx="10" cy="10" r="3" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#sacredPattern)"/>
      </svg>
    </Box>
  );

  return (
    <Box
      as="nav"
      bgGradient="linear(135deg, purple.900 0%, purple.700 50%, purple.900 100%)"
      py={4}
      px={6}
      position="sticky"
      top={0}
      width="full"
      zIndex="sticky"
      className="backdrop-blur-sm bg-opacity-90"
      boxShadow="0 4px 20px rgba(89, 46, 169, 0.2)"
      color="white"
    >
      <SacredGeometryPattern />
      
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
                <DrawerBody>
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

export default Navigationn;