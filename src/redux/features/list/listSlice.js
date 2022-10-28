import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    orders: []
};


export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addOrdersSaves: (state, action) => {
            state.orders = [...state.orders, ...action.payload]
        },
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        deleteAnOrder: (state, action) => {
            state.orders = state.orders.filter(postre => postre.id !== action.payload)
        },
        addAnOrderCant: (state, action) => {
            state.orders = state.orders.filter(postre => {
                if(postre.id === action.payload) {
                    postre.cant = postre.cant + 1;
                }
                return postre;
            })
        },
        resAnOrderCant: (state, action) => {
            state.orders = state.orders.filter(postre => {
                if(postre.id === action.payload) {
                    postre.cant = postre.cant - 1 <= 0? 1 : postre.cant-1;
                }
                return postre;
            })
        },
        clearListForLogout: (state) => {
            return initialState;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addOrdersSaves, addOrder, deleteAnOrder, addAnOrderCant, resAnOrderCant, clearListForLogout } = listSlice.actions

export default listSlice.reducer