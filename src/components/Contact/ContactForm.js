import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  SimpleGrid,
  useToast,
  Text,
  Select,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useForm } from "react-hook-form";

const MotionBox = motion(Box);

const ContactForm = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowConfetti(true);
        toast({
          title: "Quote request submitted!",
          description: "We'll get back to you soon with more information.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        reset();
        setTimeout(() => setShowConfetti(false), 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An error occurred",
        description: "Unable to submit your request. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionBox
      maxW="800px"
      mx="auto"
      p={8}
      borderRadius="xl"
      boxShadow="2xl"
      bg="rgba(255, 255, 255, 0.9)"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={500}
          />
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6} align="stretch">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            color="gray.800"
          >
            Request a Quote
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl isRequired>
              <FormLabel color="gray.700">Name</FormLabel>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Your full name"
                bg="white"
                borderColor="gray.300"
              />
              {errors.name && (
                <Text color="red.500">{errors.name.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="gray.700">Email</FormLabel>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Your email address"
                bg="white"
                borderColor="gray.300"
              />
              {errors.email && (
                <Text color="red.500">{errors.email.message}</Text>
              )}
            </FormControl>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl isRequired>
              <FormLabel color="gray.700">Phone</FormLabel>
              <Input
                {...register("phone", { required: "Phone number is required" })}
                type="tel"
                placeholder="Your phone number"
                bg="white"
                borderColor="gray.300"
              />
              {errors.phone && (
                <Text color="red.500">{errors.phone.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="gray.700">Event Date and Location</FormLabel>
              <Input
                {...register("eventDateLocation", {
                  required: "Date and location are required",
                })}
                placeholder="e.g., June 15, 2024 - Sunset Beach"
                bg="white"
                borderColor="gray.300"
              />
              {errors.eventDateLocation && (
                <Text color="red.500">{errors.eventDateLocation.message}</Text>
              )}
            </FormControl>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl isRequired>
              <FormLabel color="gray.700">Venue Name</FormLabel>
              <Input
                {...register("venueName", {
                  required: "Venue name is required",
                })}
                placeholder="Name of the venue"
                bg="white"
                borderColor="gray.300"
              />
              {errors.venueName && (
                <Text color="red.500">{errors.venueName.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="gray.700">Floor Size to be Wrapped</FormLabel>
              <Input
                {...register("floorSize", {
                  required: "Floor size is required",
                })}
                placeholder="e.g., 20ft x 20ft"
                bg="white"
                borderColor="gray.300"
              />
              {errors.floorSize && (
                <Text color="red.500">{errors.floorSize.message}</Text>
              )}
            </FormControl>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl isRequired>
              <FormLabel color="gray.700">Indoor or Outdoor?</FormLabel>
              <Select
                {...register("indoorOutdoor", {
                  required: "Please select an option",
                })}
                placeholder="Select option"
                bg="white"
                borderColor="gray.300"
              >
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
              </Select>
              {errors.indoorOutdoor && (
                <Text color="red.500">{errors.indoorOutdoor.message}</Text>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="gray.700">Existing Dance Floor?</FormLabel>
              <Select
                {...register("existingFloor", {
                  required: "Please select an option",
                })}
                placeholder="Select option"
                bg="white"
                borderColor="gray.300"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
              {errors.existingFloor && (
                <Text color="red.500">{errors.existingFloor.message}</Text>
              )}
            </FormControl>
          </SimpleGrid>

          <FormControl isRequired>
            <FormLabel color="gray.700">Type of Wrap</FormLabel>
            <Select
              {...register("wrapType", {
                required: "Please select a wrap type",
              })}
              placeholder="Select wrap type"
              bg="white"
              borderColor="gray.300"
            >
              <option value="plain">Plain White Wrap</option>
              <option value="fullColor">Full Color Printed Wrap</option>
              <option value="monogram">White with Monogram</option>
              <option value="design">Custom Design Style</option>
            </Select>
            {errors.wrapType && (
              <Text color="red.500">{errors.wrapType.message}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="gray.700">Services Needed</FormLabel>
            <Textarea
              {...register("services", {
                required: "Please describe the services needed",
              })}
              placeholder="Describe the services you're interested in"
              bg="white"
              borderColor="gray.300"
              rows={4}
            />
            {errors.services && (
              <Text color="red.500">{errors.services.message}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="gray.700">
              Are you the event planner or host?
            </FormLabel>
            <Select
              {...register("eventRole", {
                required: "Please select your role",
              })}
              placeholder="Select your role"
              bg="white"
              borderColor="gray.300"
            >
              <option value="planner">Event Planner</option>
              <option value="host">Event Host</option>
              <option value="other">Other</option>
            </Select>
            {errors.eventRole && (
              <Text color="red.500">{errors.eventRole.message}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="gray.700">How did you hear about us?</FormLabel>
            <Input
              {...register("referralSource", {
                required: "Please let us know how you found us",
              })}
              placeholder="e.g., Social media, referral, search engine"
              bg="white"
              borderColor="gray.300"
            />
            {errors.referralSource && (
              <Text color="red.500">{errors.referralSource.message}</Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel color="gray.700">
              Additional Message (Optional)
            </FormLabel>
            <Textarea
              {...register("message")}
              placeholder="Any additional details or questions?"
              bg="white"
              borderColor="gray.300"
              rows={4}
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="yellow"
            size="lg"
            width="full"
            bg="linear-gradient(135deg, #F2D184 0%, #D4AF37 100%)"
            color="gray.800"
            _hover={{
              bg: "linear-gradient(135deg, #D4AF37 0%, #F2D184 100%)",
            }}
            isLoading={isSubmitting}
            loadingText="Submitting"
          >
            Submit Request
          </Button>
        </VStack>
      </form>
    </MotionBox>
  );
};

export default ContactForm;
