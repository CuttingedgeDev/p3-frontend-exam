import { useState } from "react";
import { Button, Box, Card, Flex, Heading, Input, ThemeProvider, themes } from "ui";

type AvailableThemes = keyof typeof themes;

export default function Challenge() {
  const defaultTheme: AvailableThemes = "nineties"
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>(defaultTheme)

  function renderTweet() {
    return (
      <Card mb={4} ml={4} p={3} >
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Heading as="h3">Name</Heading>
          <Box as="time" color="lightgray">time ago</Box>
        </Flex>

        <Box as="p" sx={{ pt: 2 }}>Tweet content here</Box>
      </Card>
    )
  }

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Flex sx={{ justifyContent: "center", maxWidth: "850px", margin: "64px auto" }}>
        <Box sx={{ width: "33%" }} >
          <Card sx={{ p: 4 }}>
            <Heading as="h1">
              Welcome back, Human!
            </Heading>
            <Box mt={4}>
              <Input placeholder="What's happening? " />
              <Button mt={2}>Tweet</Button>
            </Box>

            <Heading as="h5" mt={4} mb={2}>Theme switcher</Heading>
            <Button onClick={() => setCurrentTheme("modern")}>Modern</Button>
            <Button onClick={() => setCurrentTheme("nineties")} ml={2}>90s</Button>
          </Card>
        </Box>

        <Box sx={{ width: "66%" }}>
          {renderTweet()}
        </Box>
      </Flex>
    </ThemeProvider >
  );
}
