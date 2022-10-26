import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../config';




const registerUserWithEmailAndPassword = async (email, password) => {

    try {
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        const user = credential.user;
        return user;
    } catch (error) {
        return false;
    }

}

export const registerUser = async (user) => {
    try {

        const newUser = await registerUserWithEmailAndPassword(user.email, user.password);

        await updateProfile(newUser, {
            displayName: user.username
        })

        return {
            //...docRef,
            ...newUser
        }

        //console.log("Document written with ID: ", docRef);
      } catch (e) {
        //console.error("Error adding document: ", e);
        return false;
      }
}


export const loginUser = async (email, password) => {

    try {
        
        const credential = await signInWithEmailAndPassword(auth, email, password);
    
        const user = credential.user;
        return user;

    } catch (error) {
        return false;
    }

}







