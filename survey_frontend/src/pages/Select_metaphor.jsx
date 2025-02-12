import {
  Button,
  HStack,
  VStack,
  Stack,
  Input,
  ButtonGroup,
  Center,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import { use } from "react";
import { Radio, RadioGroup } from "@/components/ui/radio";

function Select_metaphor() {
  let size = "x";
  let size2 = "l";
  const JSON = {
    default_colors: [
      { color: "gray", hex: "#52525b" },
      { color: "red", hex: "#ef4444" },
      { color: "yellow", hex: "#eab308" },
      { color: "orange", hex: "#f97316" },
      { color: "green", hex: "#22c55e" },
      { color: "blue", hex: "#3b82f6" },
      { color: "teal", hex: "#14b8a6" },
      { color: "purple", hex: "#a855f7" },
      { color: "pink", hex: "#ec4899" },
      { color: "cyan", hex: "#06b6d4" },
      { color: "skoda_light", hex: "#98FB98" },
      { color: "skoda_dark", hex: "#0E3A2B" },
    ],
  };
  useSetDefaultStyles(JSON);
  /*let chroma_color = `#3b82f6`;
  chroma_color = chroma(chroma_color).darken(4.5).hex();
  document.documentElement.style.setProperty(`--blue-500`, `${chroma_color}`);
  document.documentElement.style.setProperty(`--blue-600`, `#000000`);*/
  // 0.5 then 1, then 2, then 2.5, then 3
  // darken 0.5, 1.5, 2.5, 3.5  ends 4.5
  let dynamic_stack = "<HStack>";

  function testSubmit() {
    console.log("Button clicked");
  }
  return (
    <>
      <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
        <Box
          position="absolute"
          top="0"
          left="0"
          w="full"
          color="var(--skoda_light-500)"
          bg={{
            base: "var(--skoda_dark-500)",
          }}
          p={4}
        >
          Fixed Navbar
        </Box>
        <Text>What is the link between a </Text>
        <Stack w="" h="">
          <Button
            colorScheme="teal"
            borderColor="blue.500"
            borderStyle="solid"
            px={100}
          >
            <Text>Button</Text>
          </Button>
          <Button
            onClick={() => {
              testSubmit();
            }}
            colorScheme="teal"
          >
            <Text>Button</Text>
          </Button>
          <Button colorScheme="teal">
            {" "}
            <Text>Button</Text>
          </Button>
          <Button colorScheme="teal">
            {" "}
            <Text>Button</Text>
          </Button>
        </Stack>
      </Flex>

      <Stack>
        <Button
          size={`${size}${size2}`}
          colorPalette="pink"
          boxShadow="xl"
          bg={{
            base: "var(--new_color-400)",
            _hover: "var(--red-600)",
            borderRadius: "md",
          }}
        >
          Click me
        </Button>
        <Button
          size={`${size}${size2}`}
          colorPalette="blue"
          bg={{
            base: "var(--blue-500)",
            _hover: "var(--blue-600)",
            borderRadius: "md",
          }}
        >
          Click me
        </Button>
      </Stack>
    </>
  );
}

export default Select_metaphor;
