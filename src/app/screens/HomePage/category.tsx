import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link, NavLink } from "react-router-dom";

export function Category(props: any) {
  return (
    <div className="category_frame">
      <Container maxWidth="xl">
      <Fade direction="up" triggerOnce={true} cascade damping={3}>
        <Stack className="category_section" flexDirection={"row"}>
          <Box className="living_room">
            Living Room
            <Box onClick={props.setPath}>
              <Link to="/shop">
                Shop now <img src="/iconsfurnis/arrow-right.svg" alt="" />
              </Link>
            </Box>
          </Box>
          <Box className="right_side">
            <Box className="bed_room">
              Bed Room
              <Box onClick={props.setPath}>
                <Link to="/shop">
                  Shop now <img src="/iconsfurnis/arrow-right.svg" alt="" />
                </Link>
              </Box>
            </Box>
            <Box className="kitchen">
              Kitchen
              <Box onClick={props.setPath}>
                <Link to="/shop">
                  Shop now <img src="/iconsfurnis/arrow-right.svg" alt="" />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="office">
              Office
              <Box onClick={props.setPath}>
                <Link to="/shop">
                  Shop now <img src="/iconsfurnis/arrow-right.svg" alt="" />
                </Link>
              </Box>
            </Box>

        </Stack>
            </Fade>
      </Container>
    </div>
  );
}
