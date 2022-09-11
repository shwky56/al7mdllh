import { ImagContainer, Img, MainContainer } from "./Header.styles"
import ItemsCarousel from "react-items-carousel";
import Cart from './Cart/Cart';
import { Box } from "@mui/material";




export const Header = () => {
  return (
    <MainContainer>
        <ImagContainer>
            {/* <ItemsCarousel> */}
                <Box className="">
                  <Img 
                      src='images/header/udemy_hero.jpg'
                      alt='img-hero'
                      height={450} 
                      />
                  <Cart/>
                </Box>
                {/* <IMG 
                    key={1}
                    src='images/header/udemy_hero.jpg'
                    alt='img-hero'
                    height={450} 
                    /> */}
            {/* </ItemsCarousel> */}
        </ImagContainer>
    </MainContainer>
  )
}
