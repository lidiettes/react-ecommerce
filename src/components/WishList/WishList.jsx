
import { Toaster } from 'react-hot-toast';
import './WishList.css';


const Wishlist = ({ removeCart, wishes, addWishToCart  }) => {

    return (
        <>
                {wishes.length > 0 && wishes?.map((wish, indice) => {
                    return (
                        <div className='containerProductCart' key={indice} >
                            <img className="imgProductCart" src={wish.img} alt={wish.name} />
                            <div className='infoProductCart'>
                                <div >{wish.name}  {wish.price} €</div>
                                <button className="buttonDeleteWish" type="submit" value='add' onClick={() => { removeCart(indice) }} ><i className="fa fa-trash" aria-hidden="true"></i></button>
                                <button className="buttonMoveToBag" type="submit" value='add' onClick={() => { addWishToCart(wish, indice) }} >Move to bag</button>
                                <Toaster
                            position="top-right"
                            reverseOrder={true} />
                            </div>
                            <hr />
                        </div>
                    )
                }) || <div className="emptySaved">You have no Saved Items</div>}
            
        </>
    );
};

export default Wishlist;