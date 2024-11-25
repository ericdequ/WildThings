// components/gallery.js
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = ({ data }) => {
  const carouselSettings = {
    showThumbs: useBreakpointValue({ base: false, md: true }),
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 5000,
    stopOnHover: true,
    swipeable: true,
    emulateTouch: true,
    dynamicHeight: false,
    className: "gallery-carousel",
  };

  const getImageSize = useBreakpointValue({
    base: { width: 400, height: 300 },
    md: { width: 800, height: 600 },
    lg: { width: 1200, height: 800 },
  });

  return (
    <Box
      id="gallery"
      bg="gray.100"
      color="gray.800"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
    >
      <VStack spacing={8} mb={8}>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          textTransform="uppercase"
        >
          Our Past Projects
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          textAlign="center"
          maxW="600px"
          mx="auto"
        >
          Take a look at some of our stunning past projects showcasing our
          expertise in Tree Cuttings.
        </Text>
      </VStack>
      <Carousel {...carouselSettings}>
        {data.map((item, index) => (
          <Box
            key={index}
            position="relative"
            h="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box position="relative" width="100%" height={getImageSize.height}>
              <Image
                src={item.largeImage}
                fill
                alt={item.alt}
                title={item.title}
                layout="fill"
                objectFit="cover"
                quality={100}
                loading={index < 6 ? "eager" : "lazy"}
                className="gallery-image"
                sizes={`(max-width: 640px) 400px, (max-width: 768px) 800px, 1200px`}
                priority={index < 6}
              />
            </Box>
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              bg="rgba(0, 0, 0, 0.7)"
              p={{ base: 4, md: 6 }}
            >
              <Heading
                as="h3"
                size={{ base: "lg", md: "xl" }}
                mb={2}
                color="white"
              >
                {item.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="white">
                {item.alt}
              </Text>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Gallery;
