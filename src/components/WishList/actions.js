const wishesReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'add_item':
           
            return [...initialState, action.payload]

        case 'delete_item':
            return action.payload;
            
        default:
            return initialState;

    }
}
export default wishesReducer;