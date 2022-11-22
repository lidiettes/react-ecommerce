import { useContext, useEffect } from 'react'
import toast from 'react-hot-toast'
import ProductCart from '../components/ProductCart/ProductCart'
import ShippingForm from '../components/ShippingForm/ShippingForm'
import { CartContext } from '../context/CartContext/CartContext'


const ShippingPage = ({ removeCart, addToCart}) => {

//trampita: tengo duplicado addtocart y delete

  const { items, setItems } = useContext(CartContext);

  function addToCart(product) {
    const index = items.find(e => e.id === product.id)
    if (index) {
        setItems(
            items.map(e => e.id === product.id ? {
                ...index,
                quantity: index.quantity + 1
            }
                : e));
    } else {
        setItems([...items, { ...product, quantity: 1 }])
    }
    const notify = () => toast.success('Added to cart');
    return notify();
}

function removeCart(id) {
    const removes = items.filter((item) => item.id!== id);
    setItems(removes);
}
useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
}, [items]);

  return (

      <div className="mari" style={{display:"flex", margin:"50px"}}>
        <div className="pili" >
          
          <ProductCart 
          removeCart={removeCart}
          addToCart={addToCart}
          />

        </div >
        <div style={{  }}>
        <ShippingForm />
        </div>
      </div>
  )
}

export default ShippingPage