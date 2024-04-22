import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@material-ui/lab/TabPanel";
import { Fade } from "react-awesome-reveal";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";


import { serviceApi } from "../../../lib/config";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";

import { useHistory } from "react-router-dom";
import {  retrievePausedOrders } from "../../screens/OrdersPage/selector";
import { Order } from "../../../types/order";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "../../screens/OrdersPage/slice";

/**REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
    setPausedOrders: (data: Order[]) => dispach(setPausedOrders(data)),
    setProcessOrders: (data: Order[]) => dispach(setProcessOrders(data)),
    setFinishedOrders: (data: Order[]) => dispach(setFinishedOrders(data)),
  });
  

/**REDUX SELECTOR */
const pausedOrdersRetriever = createSelector(
    retrievePausedOrders,
    (pausedOrders) => ({
        pausedOrders,
    })
  );
  

const currentOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function CurrentOrders(props: any) {
  /*INITIALIZATION*/
  const {pausedOrders} = useSelector(pausedOrdersRetriever)
  return (
    <>
      <Fade direction="left">
        <TabPanel value="1">
          <Stack>
            {currentOrders?.map((ele) => {
              return (
                <Box className="order_main_box">
                  <Box className="order_box_scroll">
                    {ele.map((item) => {
                      const image_path = ``;
                      return (
                        <Box className="ordersName_price">
                          <img
                            className="orderDishImg"
                            src={`/imagesfurnis/kitchen.svg`}
                            alt=""
                          />
                          <p className="titleDish">Toaster</p>
                          <Box className="priceBox">
                            <p>$20</p>
                            <img src="/icons/Close.svg" alt="" />
                            <p></p>
                            <img src="/icons/Pause.svg" alt="" />
                            <p style={{ marginLeft: "15px" }}>${}</p>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                  <Box className="total_price_box black_solid">
                    <Box className="boxTotal">
                      <p>Price of Product</p>
                      <p></p>
                      <img
                        src="/icons/Plus.svg"
                        style={{ marginLeft: "20px" }}
                        alt=""
                      />
                      <p>Delivery Service </p>
                      <p>$</p>
                      <img
                        src="/icons/Pause.svg"
                        style={{ marginLeft: "20px" }}
                        alt=""
                      />
                      <p>All</p>
                      <p>$</p>

                      <Button
                        variant="contained"
                        sx={{ mx: "25px" }}
                        style={{ borderRadius: "10px" }}
                        color="primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        style={{ borderRadius: "10px" }}
                        color="secondary"
                      >
                        Pay
                      </Button>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </TabPanel>
      </Fade>
    </>
  );
}
