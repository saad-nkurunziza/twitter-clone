"use client";
import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import Button from "./Button";
import Image from "next/image";
import { useSession } from "next-auth/react";
const TweetForm = () => {
  const { data: session } = useSession();
  const userId = session?.user?.email;
  const [body, setBody] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("body", body);
    formData.append("image", image!);
    formData.append("userId", userId!);

    try {
      const response = await fetch("/api/tweet", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setBody("");
        setImage(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file!));
  };
  return (
    <form className="flex flex-col flex-grow pt-2" onSubmit={handleSubmit}>
      <textarea
        className="h-auto min-h-fit rounded-sm bg-transparent outline-none border-none text-lg"
        placeholder="What is happening?!"
        cols={5}
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      {preview ? (
        <div className="h-auto w-full relative">
          <Image src={preview} width={400} height={500} alt="Preview" />
        </div>
      ) : null}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 border-light p-4">
          <div>
            <label className="text-primary cursor-pointer " htmlFor="image">
              <AiOutlinePicture size={20} fontWeight={700} />
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              id="image"
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>
        <div className="w-24">
          <Button className="py-2" submit>
            Tweet
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TweetForm;
