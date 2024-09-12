import Guest from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";

export default function Edit({ post }) {
    const {data, setData, put, processing, errors} = useForm({
        author: post.author || "",
        title: post.title || "",
        body: post.body || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("posts.update", post.id));
    };

    return (
        <Guest>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-8 text-left">
                    <h1 className="mx-auto text-xl">Update {post.title}</h1>
                    <label>
                        Title
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-200 sm:text-sm sm:leading-6"
                        />
                        {errors.title && <span className="text-sm text-red-600 space-y-1">{errors.title}</span>}
                    </label>

                    <label>
                        Author
                        <input
                            type="text"
                            value={data.author}
                            onChange={(e) => setData("author", e.target.value)}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-200 sm:text-sm sm:leading-6"
                        />
                        {errors.author && <span className="text-sm text-red-600 space-y-1">{errors.author}</span>}
                    </label>

                    <label>
                        Main content
                        <textarea
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-200 sm:text-sm sm:leading-6"
                        />
                        {errors.body && <span className="text-sm text-red-600 space-y-1">{errors.body}</span>}
                    </label>
                </div>

                <div className="flex">
                    <Link
                        href={route("home")}
                        className="inline-block px-4 py-2 mt-4 text-black border rounded-md hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-4 py-2 mt-4 ml-4 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                    >
                        Update
                    </button>
                </div>
            </form>
        </Guest>
    );
}
