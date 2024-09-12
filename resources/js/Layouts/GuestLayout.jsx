import Navigation from "@/Components/Navigation";
import { Head } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <>
            <Head title="App" />
            <div className="w-3/5 mx-auto my-10">
                <Navigation />
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}
