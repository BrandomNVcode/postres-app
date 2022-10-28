//import { listenerMiddleware } from "../../middleware/listenerMiddleware";
import { createOrderUser } from "../../../firebase/storeOrdersFunctions/storeOrders";
import { addOrder, deleteAnOrder } from "./listSlice";





export const listListenerMiddleware = (listenerMiddleware) => {
    
    /* ORDERS */
    listenerMiddleware.startListening({
        actionCreator: addOrder,
        effect: async (action, listenerApi) => {
      
          const { list, user } = listenerApi.getState();
      
          createOrderUser(user.uid, list.orders);
        }
    });

    listenerMiddleware.startListening({
        actionCreator: deleteAnOrder,
        effect: async (action, listenerApi) => {
            const { list, user } = listenerApi.getState();
            createOrderUser(user.uid, list.orders);
        }
    })

}


  