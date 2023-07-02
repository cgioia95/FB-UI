import { createTheme } from "@mui/material/styles"

export const colours = {
  icon: "#D8DADF",
  searchBar: "#E4E6E9",
  background: "#F0F2F5ff",
  white: "#ffffff"
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#385898"
    }, 
    secondary: {
      main: "#F0F2F5ff",
      light: "#ffffff",
    }
  },
})

export default theme
