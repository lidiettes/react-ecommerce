import './ProductsContainer.css';
import ProductCard from '../ProductCard/ProductCard';
import Search from '../Search/Search';
import { Link, useSearchParams } from 'react-router-dom';

const ProductsContainer = ({ addToCart, stock, handleAddWished }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value });

    };
    return (
        <>
            <div>
                <Search
                    handleFilter={handleFilter}
                    filter={filter}
                />
            </div>

            <div className="ContainerCard">

                {stock
                .filter((items) => {
                    if (!filter) return true;
                    else {
                        const itemName = items.name.toLowerCase()
            
                        return itemName.includes(filter.toLocaleLowerCase())
                    }
                })
                .map((item) => {

                    return (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            designer = {item.designer}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                            addToCart={addToCart}
                            handleAddWished={handleAddWished}
                        />
                    )
                })
            
                }
            </div>
        </>
    )
};

export default ProductsContainer;