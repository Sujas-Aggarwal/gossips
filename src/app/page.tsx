import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import axiosHelper from "@/helpers/axiosHelper";
import Link from "next/link";
import React from "react";
function getTimeDiff(timestampMs: number) {
    const timestampDate: Date = new Date(timestampMs);
    const currentDate: Date = new Date();
    const differenceMs: number =
        currentDate.getTime() - timestampDate.getTime();
    const differenceInSeconds: number = Math.floor(differenceMs / 1000);
    const differenceInMinutes: number = Math.floor(differenceInSeconds / 60);
    const differenceInHours: number = Math.floor(differenceInMinutes / 60);
    const differenceInDays: number = Math.floor(differenceInHours / 24);
    if (differenceInDays) {
        return `${differenceInDays}d ago`;
    }
    if (differenceInHours) {
        return `${differenceInHours}h ago`;
    }
    if (differenceInMinutes) {
        return `${differenceInMinutes}m ago`;
    }
    return `${differenceInSeconds}s ago`;
}
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
    createdAt: number;
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
                                    <p className="text-xs text-gray-400 whitespace-nowrap">
                                        {post.createdAt &&
                                            getTimeDiff(post.createdAt)}
                                    </p>
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
                                                className="rounded-md object-cover w-full h-full"
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
                                <div className="w-full h-8 mt-2 gap-2 flex items-center justify-stretch">
                                    <div className="flex  gap-2 items-center p-[6px] px-3 rounded-full bg-slate-100 dark:bg-[#222]">
                                        <svg
                                            fill="currentColor"
                                            height="16"
                                            icon-name="upvote-outline"
                                            viewBox="0 0 20 20"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>{" "}
                                        </svg>
                                        0
                                        <svg
                                            className="rotate-180"
                                            fill="currentColor"
                                            height="16"
                                            icon-name="upvote-outline"
                                            viewBox="0 0 20 20"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>{" "}
                                        </svg>
                                    </div>
                                    <div className="flex  gap-2 items-center p-[6px] px-3 rounded-full bg-slate-100 dark:bg-[#222]">
                                        <svg
                                            aria-hidden="true"
                                            fill="currentColor"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {" "}
                                            <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>{" "}
                                        </svg>
                                        0
                                    </div>
                                    <div className="flex  gap-2 items-center p-[6px] px-3 rounded-full bg-slate-100 dark:bg-[#222]">
                                        <svg
                                            aria-hidden="true"
                                            fill="currentColor"
                                            height="20"
                                            icon-name="share-ios-outline"
                                            viewBox="0 0 20 20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {" "}
                                            <path d="M19 11v5.378A2.625 2.625 0 0 1 16.378 19H3.622A2.625 2.625 0 0 1 1 16.378V11h1.25v5.378a1.373 1.373 0 0 0 1.372 1.372h12.756a1.373 1.373 0 0 0 1.372-1.372V11H19ZM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624 0 0 0-.884 0l-4 4 .884.884 2.933-2.933Z"></path>
                                        </svg>
                                        Share
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Page;
