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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion(Link);
const MotionFlex = motion(Flex);

const navLinks = [
  { text: "Classes", href: "/#classes" },
  { text: "About", href: "/#about" },
  { text: "Services", href: "/#services" },
  { text: "Contact", href: "/#contact" },
];

const Navigation = () => {
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
      bg="linear-gradient(135deg, #8B4513 0%, #DEB887 100%)"
      py={4}
      px={6}
      zIndex="sticky"
      top={0}
      width="full"
      position="sticky"
      boxShadow="0 4px 6px rgba(0,0,0,0.1)"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
        maxW="1200px"
        w="full"
      >
        <MotionLink
          href="/#page-top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box boxSize={{ base: "120px", md: "160px" }} p={3}>
            <Image
              src="/logofunfont.png"
              alt="Warriors and Wildthings Yoga logo"
              objectFit="contain"
              width="100%"
              height="auto"
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
              _hover={{ bg: "rgba(255,255,255,0.2)" }}
              _active={{ bg: "rgba(255,255,255,0.3)" }}
              size="lg"
              color="white"
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              size="full"
            >
              <DrawerOverlay />
              <DrawerContent bg="linear-gradient(135deg, #8B4513 0%, #DEB887 100%)">
                <DrawerBody>
                  <Flex justify="flex-end" mt={4}>
                    <IconButton
                      icon={<CloseIcon />}
                      onClick={onClose}
                      variant="ghost"
                      aria-label="Close menu"
                      _hover={{ bg: "rgba(255,255,255,0.2)" }}
                      _active={{ bg: "rgba(255,255,255,0.3)" }}
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
                          color: "#F5DEB3",
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
                _hover={{ color: "#F5DEB3" }}
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.text}
                <Box
                  position="absolute"
                  bottom="-2px"
                  left="0"
                  right="0"
                  height="2px"
                  bg="#F5DEB3"
                  transformOrigin="left"
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

export default Navigation;