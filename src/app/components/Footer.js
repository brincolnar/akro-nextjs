import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return(
        <footer className="bg-white dark:bg-gray-800">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <div className="text-center">
                    <Link href="#"
                        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                        AKRO
                    </Link>
                    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2022 J.F. Capital International OU. All rights reserved. Built with <Link href="https://flowbite.com"
                            className="text-purple-600 hover:underline dark:text-purple-500">Flowbite</Link> and <Link
                            href="https://tailwindcss.com"
                            className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</Link>.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;