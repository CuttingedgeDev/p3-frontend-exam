import { Theme, merge } from "theme-ui"
import base from "./base"

// Use this gradient
// linear-gradient(30deg, rgba(231,152,89,0.95) 20%, rgba(214,83,206,1) 80%)

const nineties: Theme = merge(base, {
  fonts: {
    body: '"Comic Sans MS", serif',
    heading: '"Righteous", cursive',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: "white",
    background: "rgb(48, 42, 140)",
    secondary: "rgb(242, 239, 143)"
  },
  buttons: {
    primary: {
      fontFamily: "inherit",
      color: "white",
      borderRadius: "0",
      textTransform: "uppercase",
      bg: "hotpink",
      transition: "background 100ms ease-in-out",
      "&:hover": {
        bg: "pink",
        color: "black"
      }
    },
    secondary: {
      color: "purple",
      bg: "purple",
      "&:hover": {
        color: "purple"
      }
    }
  },
  cards: {
    primary: {
      // backgroundColor: "rgba(1, 1, 1, 0.1)",
      // background: "linear-gradient(30deg, rgba(240,244,16,1) 0%, rgba(214,83,206,1) 100%)",
      background: "linear-gradient(30deg, rgba(231,152,89,0.95) 20%, rgba(214,83,206,1) 80%)",
    }
  },
  forms: {
    input: {
      fontFamily: "body",
      borderRadius: 0,
      backgroundColor: "secondary",
      border: "transparent",
      color: "gray",
      outlineColor: "secondary"
    }
  },
  text: {
    heading: {
      letterSpacing: "1px"
    }
  }
})

export default nineties
