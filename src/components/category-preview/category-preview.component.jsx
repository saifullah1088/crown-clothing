import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
        <div className="preview">
          {products
            .filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </h2>
    </div>
  );
};

export default CategoryPreview;
