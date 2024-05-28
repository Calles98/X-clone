import { app } from "@/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import Post from "@/components/Post";

async function PostPage({ params }) {
  let data = {};
  const db = getFirestore(app);
  const querysnapshot = await getDoc(doc(db, "posts", params.id));
  data = { ...querysnapshot.data(), id: querysnapshot.id };
  return (
    <div className="max-w-xl mx-auto border-r border-l min-h-screen">
      <div className="flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <Link href={"/"} className="hover:bg-gray-100 rounded-full p-2">
          <HiArrowLeft className="h-5 w-5" />
          <h2 className="sm:text-lg">Back</h2>
        </Link>
      </div>
      <Post post={data} id={data.id} />
    </div>
  );
}

export default PostPage;
