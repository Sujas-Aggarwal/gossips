import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import axiosHelper from "@/helpers/axiosHelper";
import Link from "next/link";
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
async function Page() {
    const posts: {
        data: Array<PostType>;
    } = await axiosHelper.get("/api/posts");
    console.log(posts);
    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="h-[55px]"></div>
            <div className="w-full flex relative justify-start h-[calc(100vh-55px)] overflow-auto overflow-x-hidden">
                <Sidebar />
                <div
                    id="posts-section"
                    className="flex flex-col gap-4 p-4 w-full max-w-2xl overflow-auto overflow-x-hidden"
                >
                    {posts.data.map((post: any, index: number) => {
                        return (
                            <div
                                key={index}
                                className="bg-white select-text dark:bg-[#333] dark:text-white rounded-md p-4"
                            >
                                <Link
                                    href={`/profile/${post.user}`}
                                    className="flex gap-2 items-center mb-3 w-min"
                                >
                                    <img
                                        src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"
                                        alt="PP"
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                    <p>{post.user}</p>
                                </Link>
                                <h1 className="text-xl font-bold">
                                    {post.title}
                                </h1>
                                <p className="py-2 text-sm">
                                    {post.description}
                                </p>
                                {post.media.type !== "" && (
                                    <div className="w-full aspect-video overflow-hidden bg-[#111] rounded-md">
                                        {post.media.type === "video" && (
                                            <video
                                                className="rounded-md object-contain w-full h-full"
                                                src={post.media.url}
                                                controls
                                            ></video>
                                        )}
                                        {post.media.type === "image" && (
                                            <img
                                                className="rounded-md object-contain w-full h-full"
                                                src={post.media.url}
                                                alt="Image"
                                            />
                                        )}
                                        {post.media.type === "audio" && (
                                            <audio
                                                className="rounded-md object-contain w-full h-full"
                                                src={post.media.url}
                                                controls
                                            ></audio>
                                        )}
                                        {post.media.type === "pdf" && (
                                            <iframe
                                                className="rounded-md object-contain w-full h-full"
                                                src={post.media.url}
                                            ></iframe>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Page;
