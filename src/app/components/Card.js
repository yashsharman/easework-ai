"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cart/cartSlice";

export default function ProductCard({ index, product }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        width: 280,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="50"
        image={product.thumbnail}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <CardContent>
          <Typography gutterBottom component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              router.push(`/productPage/${product.id}`);
            }}
          >
            View Details
          </Button>
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => dispatch(addItem(product))}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
