import { Link } from "@inertiajs/react";

export default function Navigation() {
    return (
        <nav className="pb-5 mb-5 border-b">
            <ul className="flex justify-end space-x-5">
                <li>
                    <Link href={route("home")}>Home</Link>
                </li>
                <li>
                    <Link href={route("about")}>About</Link>
                </li>
            </ul>
        </nav>
    );
}
