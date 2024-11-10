"use client";
import { cartSelector } from "@/redux/cart/cartSlice";
import { Badge, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const router = useRouter();
  const cart = useSelector(cartSelector);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        p: "1rem",
        WebkitBoxShadow: "0px 2px 16px -4px rgba(0,0,0,0.53)",
        MozBoxShadow: "0px 2px 16px -4px rgba(0,0,0,0.53)",
        boxShadow: "0px 2px 16px -4px rgba(0,0,0,0.53)",
      }}
    >
      <h3
        className="text-2xl font-bold cursor-pointer"
        onClick={() => {
          router.push(`/`);
        }}
      >
        Easework-AI
      </h3>
      {cart.length > 0 ? (
        <Badge badgeContent={cart.length} color="primary">
          <h3
            className="text-2xl font-bold cursor-pointer"
            onClick={() => {
              router.push(`/cart`);
            }}
          >
            🛒
          </h3>
        </Badge>
      ) : (
        <h3
          className="text-2xl font-bold cursor-pointer"
          onClick={() => {
            router.push(`/cart`);
          }}
        >
          🛒
        </h3>
      )}
    </Box>
  );
}

export default Navbar;
