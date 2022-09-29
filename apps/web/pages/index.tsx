import { Button, Box, Card, Flex, Heading, Input, ThemeProvider, themes } from "ui";

import Image from "next/image"
import Link from "next/link"

export default function Index() {
  const { modern } = themes

  return (
    <ThemeProvider theme={modern}>
      <Flex sx={{ flexDirection: "column", justifyContent: "center", maxWidth: "850px", margin: "64px auto" }}>
        <Box sx={{ textAlign: "left", mb: 4 }}>
          <Image src="https://p3.fi/images/p3-logo-blue.svg" layout="intrinsic" width="164px" height="64px" />
        </Box>
        <Heading as="h1">P3 Frontend Challenge</Heading>
        <br />
        <Heading as="h2">Preamble</Heading>
        <p>
          This challenge should typically take you an hour give or take. We don't want you spending an entire day on this challenge.
          Make sure to timebox, and let us know how much time you took.
        </p>

        <Heading as="h2">Submission</Heading>
        <p>
          Once completed, you may do one of the following:
          <br />
          a. Create a public repository, and share final code there
          <br />
          b. Zip the entire code, without `node_modules` and send it via email
        </p>

        <Heading as="h2">The Challenge</Heading>
        <p>
          We want you to create a tiny twitter clone with some extra features. The challenge will be split into three distinct scoring segments.
          More on that in the next following sections.
        </p>

        <Heading as="h3">Task 1: Form and State</Heading>
        <p>
          Fix the form such that it accepts some text, and upon submission display that tweet on the timeline on the right.
        </p>
        <strong>Expectations:</strong>
        <ul>
          <li>The form field should be validated (empty check, limiting characters, up to you)</li>
          <li>There's no need for persistence, but rudimentary state management is required. Saving it in memory is completely fine, bonus points for local storage</li>
        </ul>

        <Heading as="h3">Task 2: Theme</Heading>
        <p>
          Create your own theme in our UI library.
          <br />
          <br />
          Inside <code>./packages/ui</code> we have our own component library. All the available components are used on the challenge, there would be no need to create new ones.
          There you can see our two available themes. You need to create your own one, and add it to the theme switcher.
        </p>
        <strong>Required Styling Changes:</strong>
        <ul>
          <li>Change body and card background color</li>
          <li>Change body and heading font style</li>
          <li>Style button and input components</li>
        </ul>
        <Link href="/challenge">Proceed to the challenge.</Link>
      </Flex>
    </ThemeProvider >
  );
}
