import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';


export function getTotal(items) {
    return items?.reduce((accum, curr) => {
        return accum + curr.price * curr.quantity;
    }, 0);
}

  export function saveProduct(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }

  export const notify = () => toast.success('Added to cart');




  
