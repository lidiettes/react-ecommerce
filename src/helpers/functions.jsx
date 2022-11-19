import toast, { Toaster } from 'react-hot-toast';

export function getTotal(items) {
    return items?.reduce((accum, curr) => {
        return accum + curr.price * curr.quantity;
    }, 0);
}

// export function addToCart(product) {
//     const index = items.find(e => e.id === product.id)
//     if (index) {
//       setItems(
//         items.map(e => e.id === product.id ? {
//           ...index,
//           quantity: index.quantity + 1
//         }
//           : e));
//     } else {
//       setItems([...items, { ...product, quantity: 1 }])
//     }
//     const notify = () => toast.success('Added to cart');
//     return notify();
//   }

  export function saveProduct(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }

  export const notify = () => toast.success('Added to cart');

  export function saveWish(wishes) {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }

  
