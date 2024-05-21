import React from "react";
import { HiOutlineChat, HiOutlineHeart, HiOutlineTrash } from "react-icons/hi";

function Icons() {
  return (
    <div className="flex justify-start gap-5 p-2 text-gray-500">
      <HiOutlineChat className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:bg-sky-500" />
      <HiOutlineHeart className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:bg-red-500" />
      <HiOutlineTrash className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:bg-red-500" />
    </div>
  );
}

export default Icons;
