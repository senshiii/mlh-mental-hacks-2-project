import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserLocalPersistence,
} from "firebase/auth";
import { auth, db } from "../firebase";

export async function signUpUser(name, email, dob, password) {
  try {
    await auth.setPersistence(browserSessionPersistence);
    const userCrendetials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCrendetials.user;
    const userRef = doc(db, "user", user.uid);
    await setDoc(
      userRef,
      {
        name,
        email,
        dob,
        meditationDates: [],
        avgMeditationTime: 0,
        profilePhoto: user.photoURL,
        coins: 0,
      },
      { merge: true }
    );
    return user.uid;
  } catch (err) {
    // console.log(err);
    throw new Error(err.message);
  }
}

export async function signInUser(email, password) {
  try {
    await auth.setPersistence(browserLocalPersistence);
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;
    return user.uid;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchMyProfile(uid) {
  try {
    const userRef = doc(db, "user", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.data();
  } catch (err) {
    throw err;
  }
}

export async function updateMeditationRecords(uid) {
  try {
    // console.log("UID", uid);
    const userRef = doc(db, "user", uid);
    // console.log("userRef", userRef);
    const docSnap = await getDoc(userRef);
    // console.log("docnSnap", docSnap);
    const { coins } = docSnap.data();
    // console.log("user coins", coins);
    const today = new Date();
    // console.log("today", today);
    const data = {
      date: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
    };
    // console.log("data", data);
    await updateDoc(userRef, {
      meditationDates: arrayUnion(data),
      coins: coins + 1,
    });
    // console.log("updated data");
    return data;
  } catch (err) {
    throw new Error("Something went wrong", err.message);
  }
}
