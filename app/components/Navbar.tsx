
export default function Navbar({ title }: { title: string }) {
    return (
        <nav id="store" className="w-full z-30 top-0 px-6 py-1 border-b-2">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <span className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                    {title}
                </span>
            </div>
        </nav>
    )
}