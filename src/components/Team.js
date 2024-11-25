import React from "react";
import { Box, Text, VStack, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Team = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    delay: 350,
  });

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible slides as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust the number of visible slides for smaller screens
        },
      },
    ],
  };

  return (
    <animated.div id="team" ref={ref} style={fadeIn} className="p-4">
      <Box
        id="team"
        backgroundImage="url('https://www.quantumcybersolutions.com/bmw/img/grass.webp')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundAttachment="fixed" // This provides the parallax effect
        color="black"
        py={8}
        px={4}
      >
        <Text
          fontSize="2xl"
          as="h2"
          fontWeight="bold"
          mb="4"
          textAlign="center"
          borderBottom="2px solid blue"
        >
          Meet our Team
        </Text>
        {data ? (
          <Slider {...sliderSettings}>
            {data.map((d, i) => (
              <Box key={`${d.name}-${i}`} m={4}>
                <VStack spacing={4}>
                  <Box className="relative">
                    <Image
                      src={d.img}
                      fill
                      alt={d.name}
                      boxSize="250px"
                      className="rounded-full"
                    />
                    <Box
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/wall.webp')",
                        opacity: 0.2,
                      }}
                    ></Box>
                  </Box>
                  <Text fontWeight="bold">{d.name}</Text>
                  <Text color="gray.500">{d.job}</Text>
                </VStack>
              </Box>
            ))}
          </Slider>
        ) : (
          "Loading..."
        )}
      </Box>
    </animated.div>
  );
};

export default Team;
