import "../styles/carditem.css";

function CardItem() {
  return (
    <>
      {/* <div className="item-wrapper">
        <div className="item-card">
          <div className="img-item">
            <img src="https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg" height='50' width='50'/>
          </div>
          <div className="item-name"></div>
          <div className="item-price"></div>
          <div className="tot-item-price"></div>
        </div>
      </div> */}
      <div className="checkout-card-wapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card card-width">
              <div class="card-horizontal">
                <div class="img-square-wrapper">
                  <img
                    class=""
                    src="http://via.placeholder.com/300x180"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body card-center">
                  <h4 class="card-title">Tomato</h4>
                  <p class="card-text">1 Kg</p>
                </div>
                <div class="card-body card-center">
                  <h4 class="card-title">₹ 40.00</h4>
                  <p class="card-text">Total Quantity: 5</p>
                </div>
                <div class="card-body card-center">
                  <h4 class="card-title">₹ 200.00</h4>
                  <p class="card-text"></p>
                </div>
              </div>
              <div class="card-footer">
                <small class="text-muted">
                  <button>Remove</button>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card card-width">
              <div class="card-horizontal">
                <div class="img-square-wrapper">
                  <img
                    class=""
                    src="http://via.placeholder.com/300x180"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body card-center">
                  <h4 class="card-title">Tomato</h4>
                  <p class="card-text">1 Kg</p>
                </div>
                <div class="card-body card-center">
                  <h4 class="card-title">₹ 40.00</h4>
                  <p class="card-text">Total Quantity: 5</p>
                </div>
                <div class="card-body card-center">
                  <h4 class="card-title">₹ 200.00</h4>
                  <p class="card-text"></p>
                </div>
              </div>
              <div class="card-footer">
                <small class="text-muted">
                  <button>Remove</button>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card checkout-card">
              <div class="card-horizontal">
                <div class="card-body">
                  <h4 class="card-title">Total</h4>
                  <p class="card-text ">5 Items</p>
                </div>
                <div class="card-body">
                  <h4 class="card-title">₹ 400.00</h4>
                </div>
              </div>

              <div class="card-footer">
                <button class="checkout-btn">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default CardItem;
