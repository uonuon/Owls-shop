import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, child, get } from "firebase/database";

interface ChildrenType {
  children: React.ReactNode;
}
export interface UserType {
  isLoading: boolean;
  docId: any;
  user: any;
  setUser: React.Dispatch<any>;
}
export const User = createContext<UserType | null>(null);

export const UserProvider = ({ children }: ChildrenType) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(() => {
    const storedValues = localStorage.getItem("user");
    return storedValues ? JSON.parse(storedValues) : [];
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const handle = localStorage.getItem("user");
    if (handle) {
      setUser(JSON.parse(handle));
    }
  }, []);

  useEffect(() => {
    const Auth = onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      setUser(user);
    });
    return () => {
      Auth();
    };
  }, []);

  useEffect(() => {
    if (user?.uid) {
      get(child(ref(db), `users/${user.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user?.uid]);

  const value: UserType = {
    isLoading,
    docId: user?.uid,
    user,
    setUser,
  };

  return <User.Provider value={value}>{children}</User.Provider>;
};
