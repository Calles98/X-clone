import { app } from "@/firebase";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import React from "react";
import Post from "./Post";

async function Feed() {
  const db = getFirestore(app);
  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  const querysnapshot = await getDocs(q);
  let data = [];
  querysnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  console.log(data);

  return (
    <div>
      {data.map((post) => (
        <Post key={post.id} post={post} id={post.id} />
      ))}
    </div>
  );
}

export default Feed;
