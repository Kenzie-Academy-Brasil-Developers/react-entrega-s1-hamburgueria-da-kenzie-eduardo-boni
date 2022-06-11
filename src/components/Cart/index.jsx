import './style.css';
import Frame from '../../img/Frame.svg';

function Cart({ currentSale, cartTotal, removeItem, removeAll }) {
  return (
    <div className="carrinho">
      <header className="header-carrinho">
        <h2>Carrinho de compras</h2>
      </header>
      <main className="main-carrinho">
        {currentSale.length < 1 ? (
          <>
            <img src={Frame} />
          </>
        ) : (
          <>
            <div className="items-carrinho">
              {currentSale.map((item) => (
                <div className="item-remove">
                  <div className="item">
                    <div className="card-img">
                      <img src={item.img} />
                    </div>
                    <div className="alinhar-nome">
                      <div className="card-info">
                        <h3>{item.name}</h3>
                        <span className="category">{item.category}</span>
                      </div>
                    </div>
                    <span
                      className="span"
                      onClick={() => removeItem(item.id, item.price)}
                    >
                      Remover
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="cartTotal">
              <p className="total">Total:</p>
              <p className="value">{`R$ ${cartTotal}`}</p>
            </div>
            <button className="remove-all" onClick={() => removeAll()}>
              Remover todos
            </button>
          </>
        )}
      </main>
    </div>
  );
}

  export default Cart;