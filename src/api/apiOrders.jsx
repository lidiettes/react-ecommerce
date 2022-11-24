const getDataOrders = async() => {
    try {
        const response = await fetch("http://localhost:3000/orders");
        const data = await response.json();
        return data;
    } catch (error){
    }
}

export default getDataOrders;