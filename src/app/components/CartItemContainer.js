"use client";

import React from "react";
import { addQuantity, removeItem, subQuantity } from "@/redux/cart/cartSlice";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

function CartItemContainer({ item }) {
  const dispatch = useDispatch();
  const cellStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const btnStyling = {
    fontSize: "1rem",
    padding: "0",
    borderRadius: "100%",
    border: "1px solid red",
    color: "red",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: ".5fr 1fr 1fr 1fr 1fr",
        alignContent: "center",
        color: "gray",
        mt: "1rem",
        borderBottom: "1px solid gray",
      }}
    >
      <Box
        sx={{ ...cellStyle, fontSize: "1.5rem", cursor: "pointer" }}
        onClick={() => {
          dispatch(removeItem(item.id));
        }}
      >
        🗑️
      </Box>

      <img src={item.thumbnail} className="w-auto h-[100px] m-auto" />
      <Box sx={cellStyle}>{item.title}</Box>
      <Box sx={cellStyle}>
        <Box
          variant="contained"
          color="primary"
          sx={btnStyling}
          onClick={() => dispatch(subQuantity(item.id))}
        >
          -
        </Box>{" "}
        <Box sx={{ margin: "1rem" }}>{item.quantity}</Box>
        <Box
          variant="contained"
          color="primary"
          sx={{
            ...btnStyling,
            border: "1px solid green",
            color: "green",
          }}
          onClick={() => dispatch(addQuantity(item.id))}
        >
          +
        </Box>
      </Box>
      <Box sx={cellStyle}>$ {item.price * item.quantity}</Box>
    </Box>
  );
}

export default CartItemContainer;
