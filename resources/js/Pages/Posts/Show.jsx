import { Link } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

export default function Show({ post }) {
    return (
        <Guest>
            <div className="flex flex-col space-y-10">
                <h1 className="mx-auto text-xl">{post.title}</h1>

                <h2>
                    By
                    <span className="font-bold"> {post.author}</span>
                </h2>

                <div className="leading-7 text-left">{post.body}</div>
            </div>

            <Link
                href={route("home")}
                className="inline-block px-4 py-2 mt-10 text-black border rounded-md hover:bg-gray-200"
            >
                Go back
            </Link>
        </Guest>
    );
}
