import {firestoreDb} from "../firebase/FirebaseStore";
import { collection, addDoc } from "firebase/firestore";

export async function saveSpending(
    userName: string,
    inputDate: Date,
    inputCategory: string,
    inputAmount: number,
    inputComment: string
) {
    try {
        const docRef = await addDoc(collection(firestoreDb, userName), {
            date: inputDate,
            category: inputCategory,
            amount: inputAmount,
            comment: inputComment
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
