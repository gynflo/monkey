import { doc, setDoc, updateDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { db } from "@/config/firebase-config";

export async function createDocument(
  collectionName: string,
  documentID: string,
  data: object
) {
  try {
    const documentRef = doc(db, collectionName, documentID);
    await setDoc(documentRef, data);
    return {
      data: true,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
}

export async function updateDocument(
  collectionName: string,
  documentID: string,
  data: object
) {
  try {
    const documentRef = doc(db, collectionName, documentID);
    await updateDoc(documentRef, data);
    return {
      data: true,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
}
