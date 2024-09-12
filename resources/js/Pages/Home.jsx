import { Index as Posts } from "../Pages/Posts/Index";
import Guest from "@/Layouts/GuestLayout";

export default function Home({ posts }) {
    return (
        <Guest>
            <h1 className="my-5 text-xl font-semibold text-center">
                Welcome to My Blog
            </h1>

            <Posts posts={posts} />
        </Guest>
    );
}
