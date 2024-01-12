/* eslint-disable react-hooks/exhaustive-deps */
import { push, query, orderByChild, onValue } from "firebase/database";
import { ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { User, UserType } from "../Context/User";
import { db } from "../FirebaseConfig";
import { useStateRef } from "./useStateRef";

export interface Recommendation {
  backgroundColor: string;
  borderColor: string;
  content: string;
  id: number;
  showedText: string;
}

export const useMessages = () => {
  const [messages, setMessages, messagesRef] = useStateRef<any[]>([]);

  const { docId } = useContext(User) as UserType;
  const [isSending, setIsSending] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const snapshotToArrayRecommendations = (snapshot: any, localDB: any) => {
    let localRecommendations: Recommendation[] = [];
    if (localDB) {
      localRecommendations = JSON.parse(localDB ?? []);
    }
    const returnArr: any[] = [];

    snapshot.forEach((childSnapshot: any) => {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      const checkItem = localRecommendations.find((lr) => lr.id === item.id);
      if (!checkItem) {
        returnArr.push(item);
      }
    });
    return returnArr;
  };

  useEffect(() => {
    if (docId && messagesRef.current.length === 0) {
      const messagesListRef = query(
        ref(db, "messages/" + docId),
        orderByChild("createdAt")
      );
      onValue(messagesListRef, (snapshot) => {
        setMessages(snapshotToArray(snapshot));
      });
    }
  }, [docId]);

  const snapshotToArray = (snapshot: any) => {
    const returnArr: any[] = [];

    snapshot.forEach((childSnapshot: any) => {
      var item = childSnapshot.val();
      item.messageKey = childSnapshot.key;
      returnArr.push(item);
    });
    return returnArr;
  };
  return {
    messagesRef,
    setMessages,
    isSending,
    recommendations,
    setRecommendations,
  };
};
