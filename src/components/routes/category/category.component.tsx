import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../store/categories/categories.selector";
import { Spinner } from "../../spinner/spinner.component";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import ProductCard from "../../product-card/product-card.component";
import { CategoryContainer } from "./category.styles";

type CategoryRouteParams = {
  category: string;
};

const Category: React.FC = () => {
  const { category } = useParams<CategoryRouteParams>();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category ?? ""]);

  useEffect(() => {
    if (category) {
      setProducts(categoriesMap[category]);
    }
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
