
export const CartCard = ({ imgSrc, title, qty, amt , prodId, totQtyAdd}) => {

  return (
    <div class="card-horizontal">
                <div class="img-square-wrapper">
                {imgSrc && (
                  <img
                    src={imgSrc}
                    alt={`Product: ${title}`} // You can describe the product
                    height='150'
                    width='150'
                  />
                  )}
                </div>
                <div class="card-body card-center">
                {title && 
                  <h4 class="card-title">{title}</h4>
                }
                {qty && 
                  <p class="card-text">{qty}</p>
                }
                </div>
                <div class="card-body card-center">
                {amt && 
                  <h4 class="card-title">₹ {amt}</h4>
                }
                  <p class="card-text">Total Quantity: {totQtyAdd}</p>
                </div>
                <div class="card-body card-center">
                  <h4 class="card-title">₹ {parseFloat(amt.replace('₹', '')) * totQtyAdd}</h4>
                  <p class="card-text"></p>
                </div>
              </div>
  );
};
