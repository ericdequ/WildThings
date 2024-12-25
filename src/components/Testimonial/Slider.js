import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Text, VStack, HStack } from '@chakra-ui/react';

const TestimonialSlider = ({ clientTestimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayCount, setDisplayCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setDisplayCount(3);
      } else if (window.innerWidth >= 768) {
        setDisplayCount(2);
      } else {
        setDisplayCount(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, clientTestimonials.length - displayCount);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));
  const goToSlide = (index) => setCurrentSlide(Math.min(Math.max(0, index), maxSlide));

  return (
    <Box className="w-full bg-gradient-to-b from-purple-50 to-white">
      {/* SVG Definitions */}
      <svg className="hidden">
        <defs>
          <symbol id="lotus-arrow-left" viewBox="0 0 100 100">
            <path d="M60 50 L40 50 M40 50 L48 42 M40 50 L48 58" 
                  stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M50 25 C60 25, 70 35, 70 45 C70 55, 60 65, 50 65 C40 65, 30 55, 30 45 C30 35, 40 25, 50 25"
                  stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
          </symbol>
          
          <symbol id="lotus-arrow-right" viewBox="0 0 100 100">
            <path d="M40 50 L60 50 M52 42 L60 50 L52 58" 
                  stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M50 25 C60 25, 70 35, 70 45 C70 55, 60 65, 50 65 C40 65, 30 55, 30 45 C30 35, 40 25, 50 25"
                  stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
          </symbol>

          <symbol id="lotus-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="4" fill="currentColor"/>
            <path d="M50 42 C55 42, 58 45, 58 50 C58 55, 55 58, 50 58 C45 58, 42 55, 42 50 C42 45, 45 42, 50 42"
                  stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
          </symbol>

          <symbol id="card-decoration" viewBox="0 0 100 100">
            <path d="M20 0 C40 0, 60 20, 60 40 C60 60, 40 80, 20 80 C0 80, -20 60, -20 40 C-20 20, 0 0, 20 0"
                  stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2"/>
            <circle cx="20" cy="40" r="3" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          </symbol>
        </defs>
      </svg>

      {/* Main Container */}
      <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Flex className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10
              ${currentSlide === 0 ? 'opacity-40' : 'opacity-100 hover:opacity-80'}
              bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm p-2 rounded-full
              transition-all duration-300 ease-in-out`}
            variant="ghost"
            aria-label="Previous testimonial"
          >
            <svg className="w-8 h-8 text-purple-600">
              <use href="#lotus-arrow-left" />
            </svg>
          </Button>

          {/* Testimonials Container */}
          <Flex className="w-full overflow-hidden">
            <Flex
              className="transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / displayCount)}%)`,
                gap: '1.5rem',
              }}
            >
              {clientTestimonials.map(({ name, text }, index) => (
                <Box
                  key={`testimonial-${index}`}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 flex-none
                           shadow-lg hover:shadow-xl transition-shadow duration-300
                           border border-purple-100"
                  style={{ width: `calc(${100 / displayCount}% - 1rem)` }}
                >
                  <div className="absolute top-0 right-0 text-purple-200">
                    <svg className="w-20 h-20 md:w-24 md:h-24">
                      <use href="#card-decoration" />
                    </svg>
                  </div>
                  
                  <VStack align="start" spacing={4} className="relative z-10">
                    <Text className="text-lg md:text-xl font-medium text-purple-800">{name}</Text>
                    <Text className="text-purple-600 text-sm md:text-base leading-relaxed">{text}</Text>
                  </VStack>
                </Box>
              ))}
            </Flex>
          </Flex>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10
              ${currentSlide === maxSlide ? 'opacity-40' : 'opacity-100 hover:opacity-80'}
              bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm p-2 rounded-full
              transition-all duration-300 ease-in-out`}
            variant="ghost"
            aria-label="Next testimonial"
          >
            <svg className="w-8 h-8 text-purple-600">
              <use href="#lotus-arrow-right" />
            </svg>
          </Button>
        </Flex>

        {/* Mobile Navigation */}
        <Flex className="md:hidden justify-between mt-6 px-4">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`${currentSlide === 0 ? 'opacity-40' : 'opacity-100'}
                       bg-white/80 shadow-md backdrop-blur-sm p-2 rounded-full`}
            variant="ghost"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-purple-600">
              <use href="#lotus-arrow-left" />
            </svg>
          </Button>
          <Button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className={`${currentSlide === maxSlide ? 'opacity-40' : 'opacity-100'}
                       bg-white/80 shadow-md backdrop-blur-sm p-2 rounded-full`}
            variant="ghost"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-purple-600">
              <use href="#lotus-arrow-right" />
            </svg>
          </Button>
        </Flex>

        {/* Pagination Dots */}
        <HStack justify="center" spacing={2} className="mt-8">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <Button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              variant="unstyled"
              className="w-3 h-3 p-0 transition-colors"
              aria-label={`Go to slide ${index + 1}`}
            >
              <svg className={`w-full h-full ${
                currentSlide === index ? 'text-purple-600' : 'text-purple-200'
              } transition-colors duration-300`}>
                <use href="#lotus-dot" />
              </svg>
            </Button>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;