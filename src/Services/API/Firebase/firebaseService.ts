import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  QuerySnapshot,
} from 'firebase/firestore';
import { db } from '../../../firebase';
import { Color } from 'Interfaces';

export const getColorsFromFirebase = async (): Promise<Color[]> => {
  try {
    const querySnapshot: QuerySnapshot = await getDocs(
      collection(db, 'colors')
    );
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      colorName: doc.data().colorName,
      colorHex: doc.data().colorHex,
    }));
  } catch (error) {
    throw new Error('Error fetching colors from Firebase');
  }
};

export const saveColorToFirebase = async (
  colorName: string,
  colorHex: string
): Promise<Color> => {
  try {
    const docRef = await addDoc(collection(db, 'colors'), {
      colorName,
      colorHex,
    });
    return { id: docRef.id, colorName, colorHex };
  } catch (error) {
    throw new Error('Error adding color to Firebase');
  }
};

export const deleteColorFromFirebase = async (
  colorId: string
): Promise<{ response?: boolean; error?: string }> => {
  try {
    const colorRef = doc(db, 'colors', colorId);
    await deleteDoc(colorRef);
    return { response: true };
  } catch (error) {
    return { error: `Error deleting color with ID: ${colorId}` };
  }
};
