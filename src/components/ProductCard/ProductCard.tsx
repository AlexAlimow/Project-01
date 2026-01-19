import type { FC } from "react";
import { Link } from "react-router-dom";
import type Product from "../../shared/types/Product";
import { ROUTES as R } from "../../shared/routes";

export const ProductCard: FC<Product> = (product) => {
  return (
    <div>
      <h3>
        <Link to={R.PRODUCT(product.id)}>{product.title}</Link>
      </h3>
      <img src={product.images[0]} alt={product.title} />
      <p> Price : {product.price} Euro</p>
    </div>
  );
};
