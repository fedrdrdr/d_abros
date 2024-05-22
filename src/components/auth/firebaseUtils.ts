import { db, storage } from './firebaseConfig';
import { collection, addDoc, getDocs, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Post } from '../../assets/types';

// Функция для добавления нового поста
export const addPost = async (title: string, description: string, file: File): Promise<void> => {
  try {
    // Загрузите файл в Firebase Storage
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(storageRef);

    // Сохраните данные поста в Firestore
    const docRef = await addDoc(collection(db, "posts"), {
      title,
      description,
      photoURL,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// Функция для получения всех постов
export const getPosts = async (): Promise<Post[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const posts: Post[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
      id: doc.id,
      ...doc.data() as Post
    }));
    return posts;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
};
