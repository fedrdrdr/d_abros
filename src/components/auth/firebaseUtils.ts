import { firestore, storage } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Post } from '../../assets/types';

const postsCollectionRef = collection(firestore, 'posts');

export const addPost = async (title: string, description: string, file: File) => {
  try {
    // Загрузите файл в Firebase Storage
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(storageRef);

    // Добавьте пост в Firestore
    await addDoc(postsCollectionRef, {
      title,
      description,
      photoURL,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const querySnapshot = await getDocs(postsCollectionRef);
    const posts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Post[];
    console.log(posts);
    
    return posts;
  } catch (error) {
    console.error('Error getting documents: ', error);
    return [];
  }
};
