import type { UserDocument, UserInterface } from "@/types";
import { auth, db } from "@/config/firebase-config";
import { User, onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

export function useFirebaseAuth() {
  /* State */
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

  const formatAuthUser = (user: UserInterface) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
  });

  const getUserDocument = async (user: UserInterface) => {
    if (auth.currentUser) {
      const documentRef = doc(db, "users", auth.currentUser.uid);
      onSnapshot(documentRef, async (doc) => {
        if (doc.exists()) {
          user.userDocument = doc.data() as UserDocument;
        }
        setAuthUser((prevAuthUser) => ({
          ...prevAuthUser,
          ...user,
        }));
        setAuthUserIsLoading(false);
      });
    }
  };

  /*  */

  async function authStateChanged(authState: UserInterface | User | null) {
    setAuthUserIsLoading(true);

    if (!authState) {
      setAuthUser(null);
      setAuthUserIsLoading(false);
      return;
    }
    const userFormatted = formatAuthUser(authState);

    await getUserDocument(userFormatted);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    authUserIsLoading,
  };
}
