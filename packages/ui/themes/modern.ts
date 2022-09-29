import { Theme, merge } from "theme-ui"
import base from "./base"

const modern: Theme = merge(base, {
  buttons: {
    primary: {
    },
    secondary: {
    }
  },
  colors: {
    background: "#fafafa"
  },
  cards: {
    primary: {
      borderRadius: 8,
      background: "white"
    }
  },
  forms: {
    input: {
    }
  }
})

export default modern
