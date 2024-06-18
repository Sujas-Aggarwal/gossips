"use client";
import axiosHelper from "@/helpers/axiosHelper";
import React from "react";
type CommentType = {
    user: string;
    comment: string;
    likes: Array<string>;
    replies: Array<CommentType | null>;
};
type PostType = {
    title: string;
    description: string;
    likes: Array<string>;
    comments: CommentType;
    media: {
        type: string;
        url: string;
    } | null;
};
function Page() {
    const [post, setPost] = React.useState<PostType>({} as PostType);
    async function handlePostCreation(e: React.FormEvent) {
        e.preventDefault();
        await axiosHelper.post("/api/posts", {
            ...post,
            user: "sexyUser",
        });
    }
    return (
        <div className="w-full max-w-2xl p-2">
            <form className="flex flex-col gap-1">
                <input
                    spellCheck={false}
                    value={post.title || ""}
                    onChange={(e) =>
                        setPost((post) => ({ ...post, title: e.target.value }))
                    }
                    type="text"
                    placeholder="Title"
                    className="w-full p-2  rounded-md outline-none border-none  bg-[#111]"
                />
                <textarea
                    value={post.description || ""}
                    onChange={(e) =>
                        setPost((post) => ({
                            ...post,
                            description: e.target.value,
                        }))
                    }
                    placeholder="Description"
                    className="w-full   rounded-md p-2 outline-none border-none  bg-[#111] "
                ></textarea>
                <button
                    onClick={handlePostCreation}
                    className="w-full p-2 bg-blue-600 text-white"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
}

export default Page;
