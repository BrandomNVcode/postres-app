//import { listenerMiddleware } from "../../middleware/listenerMiddleware";
import { cerrarSesion } from "../../../firebase/authFunctions/auth";
import { getOrderUser } from "../../../firebase/storeOrdersFunctions/storeOrders";
import { addOrdersSaves, clearListForLogout } from "../list/listSlice";
import { authLogout, authUser } from "./userSlice";





export const userListenerMiddleware = (listenerMiddleware) => {
    
    /* ORDERS */
    listenerMiddleware.startListening({
        actionCreator: authUser,
        effect: async (action, listenerApi) => {
            //console.log('usuario logeado', action.payload.uid);
            const { orders } = await getOrderUser(action.payload.uid);
            listenerApi.dispatch(addOrdersSaves(orders));
        }
    });
    
    listenerMiddleware.startListening({
        actionCreator: authLogout,
        effect: async (action, listenerApi) => {
            listenerApi.dispatch(clearListForLogout());
            await cerrarSesion();
        }
    });

}