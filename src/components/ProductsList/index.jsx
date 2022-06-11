import Product from "../Product";
import './style.css';

function ProductsList({ products, handleClick }) {
  return (
    <div className="vitrine">
      {products.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </div>
  );
}

  export default ProductsList;