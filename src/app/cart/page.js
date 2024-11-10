"use client";

import { cartSelector, clearCart } from "@/redux/cart/cartSlice";
import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemContainer from "../components/CartItemContainer";

function cart() {
  const cartItems = useSelector(cartSelector);
  const dispatch = useDispatch();
  return (
    <Box>
      {cartItems.length === 0 ? (
        <h3 className="text-2xl font-bold text-center mt-4">
          Add items to your cart!
        </h3>
      ) : (
        <>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: ".5fr 1fr 1fr 1fr 1fr",
              alignContent: "center",
              color: "gray",
              mt: "1rem",
            }}
          >
            <Box sx={{ textAlign: "center" }}></Box>
            <Box sx={{ textAlign: "center" }}></Box>
            <Box sx={{ textAlign: "center" }}>Name</Box>
            <Box sx={{ textAlign: "center" }}>Quantity</Box>
            <Box sx={{ textAlign: "center" }}>Price</Box>
          </Box>
          {cartItems.map((currentProduct) => (
            <CartItemContainer key={currentProduct.id} item={currentProduct} />
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mx: "1rem",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                dispatch(clearCart());
              }}
              sx={{ mt: "1rem" }}
            >
              Remove All
            </Button>
            <Button variant="contained" color="success" sx={{ mt: "1rem" }}>
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default cart;
