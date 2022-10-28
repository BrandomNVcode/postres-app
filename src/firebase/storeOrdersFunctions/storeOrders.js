import { setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../config";




export const getOrderUser = async(uid) => {
    const docRef = doc(db, "orders", `${uid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
        console.log('no existe')
        return false;
    }
}


export const createOrderUser = async(uid, orders) => {
    try {
        await setDoc(doc(db, "orders", `${uid}`), {
            uid,
            orders
        });

        return true;
    } catch (error) {
        return false;
    }
}





