"use client";
import { addItem } from "@/redux/cart/cartSlice";
import { productsSelector } from "@/redux/products/productsSlice";
import { Box, Button } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const productList = useSelector(productsSelector);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    setCurrentProduct(productList.find((product) => product.id == params.id));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        m: "2rem",
      }}
    >
      <img src={currentProduct.images} className="w-1/4 h-auto m-auto" />
      <h3 className="text-2xl font-bold">{currentProduct.title}</h3>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            width: "max-content",
          }}
          variant="contained"
          size="medium"
          color="success"
          onClick={() => {
            dispatch(addItem(currentProduct));
          }}
        >
          Add to Cart
        </Button>
        <h4 className="text-xl font-bold">${currentProduct.price}</h4>
      </Box>
      <p className="text-medium">{currentProduct.description}</p>
    </Box>
  );
}

export default ProductPage;
