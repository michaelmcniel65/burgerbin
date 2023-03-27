import { deleteObject, ref } from "firebase/storage"
import { storage } from "./firebase-config"

export default function deleteFile(filePath) {
    const imageRef = ref(storage, filePath)
    return deleteObject(imageRef);
}