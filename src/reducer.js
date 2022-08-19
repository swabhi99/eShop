// define all the application level states and define actions to make changes to the state
export const initialState = {
    basket: [],
}

//Selector

export const getBasketTotal = (basket) => {
        let c=0;
        basket.forEach(element => {
            c+=element.price
        });
        return c; 
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
         case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            ) 
            
            let newBasket = [...state.basket]

            if(index>=0) {
                newBasket.splice(index,1);
            }else{
                console.warn(`cant remove product`)
            }

            return {
                ...state,
                basket:newBasket
            }
    }   
}

export default reducer