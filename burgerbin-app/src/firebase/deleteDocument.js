import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase-config";

export default function deleteDocument(collectionName, documentId) {
    return deleteDoc(doc(db, collectionName, documentId))
}