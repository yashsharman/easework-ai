"use client";
import { Box } from "@mui/material";
import ProductCard from "./components/Card";
import { useSelector } from "react-redux";
import { productsSelector } from "@/redux/products/productsSlice";

export default function Home() {
  const productList = useSelector(productsSelector);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          my: "2rem",
        }}
      >
        {productList &&
          productList.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </Box>
    </>
  );
}
