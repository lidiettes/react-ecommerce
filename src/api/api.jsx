const getData = async () => {
    try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        return data;
        
    } catch (error) {
    }
}



export default getData;