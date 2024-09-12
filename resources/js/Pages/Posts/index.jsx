import { Link, router, usePage } from "@inertiajs/react";
import styles from "./styles.module.css";

export function Index({ posts }) {
    const { flash } = usePage().props;

    function deletePost(id) {
        router.delete(route("posts.destroy", id));
    }

    return (
        <div>
            {flash.message && (
                <div className="p-5 mb-5 text-white bg-green-400 rounded-md">
                    {flash.message}
                </div>
            )}

            <div className="flex">
                <Link
                    href={route("posts.create")}
                    className={`${styles.link} "px-4 py-2 mt-4 text-white bg-purple-500 rounded-md hover:bg-purple-600"`}
                >
                    Create new post
                </Link>
            </div>

            {posts &&
                posts
                    .slice()
                    .reverse()
                    .map((post) => (
                        <div
                            key={post.id}
                            className="p-5 my-5 text-left border rounded-md shadow-sm"
                        >
                            <Link href={route("posts.show", post.id)} state={post}>
                                <h2 className="py-3 mb-5 font-bold hover:underline">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="font-bold">{post.author}</p>

                            <p>{post.body}</p>

                            <div className="space-x-5 space-y-5">
                                <Link
                                    href={route("posts.edit", post.id)}
                                    state={post}
                                    className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                                >
                                    Edit Post
                                </Link>

                                <button
                                    onClick={() => {
                                        if (
                                            confirm("Are you sure you want to delete this post?")
                                        ) {
                                            deletePost(post.id);
                                        }
                                    }}
                                    className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500"
                                >
                                    Delete Post
                                </button>
                            </div>
                        </div>
                    ))}
        </div>
    );
}
