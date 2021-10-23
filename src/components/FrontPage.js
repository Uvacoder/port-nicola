import React from "react";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

import BackgroundSlider from "react-background-slider";

const image1 = "%PUBLIC_URL%/pictures/1.jpg";
const image2 = "%PUBLIC_URL%/pictures/7.jpg";
const image3 = "%PUBLIC_URL%/pictures/34.jpg";
const image4 = "%PUBLIC_URL%/pictures/18.jpg";
const image5 = "%PUBLIC_URL%/pictures/1a.jpg";
const image6 = "%PUBLIC_URL%/pictures/53.jpg";
const image7 =  "%PUBLIC_URL%/pictures/82.jpg";
const image8 =  "%PUBLIC_URL%/pictures/39.jpg";
const image9 =  "%PUBLIC_URL%/pictures/19.jpg";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#FFFFFF",
    },
  },
});

export default function FrontPage() {
  return (
    <div>
      <BackgroundSlider
        images={[image1, image2, image3, image4, image5, image6, image7, image8, image9]}
        duration={2}
        transition={1}
      />
      <div className="front-page-container">
      <ThemeProvider theme={theme}>
        <h1 className="front-page-title">Nicola Nicholas</h1>
        
          <Link to={"/gallery"}><Button color="neutral" variant="outlined" size="large"> Enter site</Button></Link>
    
      </ThemeProvider>
      </div>
    </div>
  );
}
