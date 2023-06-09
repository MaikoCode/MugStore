const INITIAL_STATE = {
    cart: []
}


export default function cartReducer(state = INITIAL_STATE, action){
    switch(action.type){

        case "ADDITEM":
        
            console.log("ADD ITEM")
            const indexItemAdd = state.cart.findIndex(obj => obj.id === action.payload.id)

            if(indexItemAdd !== -1){

                const updateQuantity =  {
                    ...state.cart[indexItemAdd],
                    quantity: action.payload.quantity
                }

                const newArr = [...state.cart]
                newArr.splice(indexItemAdd, 1, updateQuantity)

                console.log(newArr)
                return {
                    cart: newArr
                }

            }else{
                const newArr = [...state.cart]
                newArr.push(action.payload)
                console.log(newArr)
                return {
                    cart: newArr
                }
            }

        return {

        }

        case "UPDATEITEM": {
            const indexItemUpdate = state.cart.findIndex(obj => obj.id === action.payload.id)

            const newArr = [...state.cart]
            newArr.splice(indexItemUpdate, 1, action.payload)

            return {
                cart: newArr
            }
            
        }

    }

    return state
}