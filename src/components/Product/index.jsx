import './style.css';

function Product({ product, handleClick }) {
  return (
    <div className="card">
      <div className="header-img">
        <img src={product.img} alt=""/>
      </div>
      <div className="card-main">
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <h3>{`R$ ${product.price}`}</h3>
        <button className="add" onClick={() => handleClick(product.id)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}


  export default Product;