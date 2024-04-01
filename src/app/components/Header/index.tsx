import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

export function NavbarHome(props: any) {
  return (
    <>
      <div className="format home_navbar">
        <Container maxWidth="xl">
          <Fade direction="up" triggerOnce={true}
           >

          <Stack
            flexDirection={"row"}
            className="navbar_container"
            justifyContent={"space-evenly"}
          >
            <Box>
              <img src="/imagesfurnis/Logo.svg" alt="" />
            </Box>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={'space-between'}
              className="navbar_links"
            >
              <Box className="hover" onClick={props.setPath}>
                <NavLink to="/" activeClassName="underline">
                  Home
                </NavLink>
              </Box>
              <Box className="hover" onClick={props.setPath}>
                <NavLink to="/shop" activeClassName="underline">
                  Shop
                </NavLink>
              </Box>

              <Box className="hover" onClick={props.setPath}>
                <NavLink to="/product" activeClassName="underline">
                  Product
                </NavLink>
              </Box>
              <Box className="hover" onClick={props.setPath}>
                <NavLink to="/orders" activeClassName="underline">
                  Orders
                </NavLink>
              </Box>
              <Box className="hover" onClick={props.setPath}>
                <NavLink to="/community" activeClassName="underline">
                  Community
                </NavLink>
              </Box>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                marginRight={"20px"}
              >
                <IconButton
                  aria-label="cart"
                  id="basic-button"
                  aria-controls={undefined}
                  aria-haspopup="true"
                  aria-expanded={undefined}
                  onClick={props.setPath}
                >
                  <Box>
                  <Button onClick={props.handleLoginOpen}>
                    <img src="/iconsfurnis/usercircle.svg" alt="" />
                  </Button>
                </Box>
                </IconButton>
                  <IconButton
                    aria-label="cart"
                    id="basic-button"
                    aria-controls={undefined}
                    aria-haspopup="true"
                    aria-expanded={undefined}
                  >
                    <Badge badgeContent={3} color="secondary">
                      <img src="/iconsfurnis/shoppingbag.svg" alt="" />
                    </Badge>
                  </IconButton>
                <IconButton
                  aria-label="cart"
                  id="basic-button"
                  aria-controls={undefined}
                  aria-haspopup="true"
                  aria-expanded={undefined}
                  onClick={props.setPath}
                >
                  <NavLink to="/">
                    <Button 
                    onClick={props.handleSignUpOpen}>     <img width={'60px'} src="/iconsfurnis/sign-up.png" alt="" /></Button>
                  </NavLink>
                </IconButton>
              </Stack>
            </Stack>
          </Stack>

           
          <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              
            >
              <SwiperSlide className="slide1">
         
         
              </SwiperSlide>
              <SwiperSlide className="slide2"></SwiperSlide>
              <SwiperSlide className="slide3"></SwiperSlide>
              {/* <Box>
                <>
                  {" "}
                  <div id="parent">
                    Transform your <br /> space with <span>timeless</span>{" "}
                    <br />
                    elegance and <br />
                    <span> exquisite</span> comfort. <div id="border"></div>
                  </div>
                </>
              </Box>
              <Box>
                <button className="header_button"> Shop Now</button>
              </Box> */}
            </Swiper> 
          </Fade>
        </Container>
      </div>
    </>
  );
}
