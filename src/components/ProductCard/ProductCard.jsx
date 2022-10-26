import React from 'react'
import './ProductCard.css';

const ProductCard = () => {
  return (
    <>
    <div className="wrapperProducts">
                    <div className="product-img">
                        <img src="Lamp1" height="420" width="327" />
                    </div>
                    <div className="product-info">
                        <div className="product-text">
                            <h1>Flowerpot</h1>
                            <h2>by Verner Panton</h2>
                            <p>Flowerpot VP9 Table Lamp Mustard is a portable version of Verner Panton’s popular Flowerpot table lamp. </p>
                            </div>
                                <div className="product-price-btn">
                                    <p><span>278</span>€</p>
                                    <button type="button">buy now</button>
                                </div>
                            </div>
    </div>


    
    </>
  )
}

export default ProductCard