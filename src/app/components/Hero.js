import Link from "next/link";
import styles from './Hero.module.css';

const Hero = () => {

    return(
        <section className={`${styles.glowBackground} bg-white dark:bg-gray-900 `}>
                <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:py-16 lg:pt-28">
                    <div className="text-center">
                        <h1
                            className="my-4 text-6xl lg:text-4xl font-extrabold leading-none tracking-tight xl:text-6xl dark:text-white">
                            Prodajte 2x več z novo spletno stranjo!</h1>
                        <p className="mb-8 text-lg font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Zgradimo vam spletno stran, ki je optimizirana za prodajo, hitra in estetsko dovršena. <br /> Naj kvaliteta
                            vaše nove spletne strani odraža kvaliteto vašega produkta ali storitve.</p>
                            <Link href="https://themesberg.com/product/tailwind-css/landing-page"
                                className="hidden lg:inline-flex  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg lg:text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Rezervirajte
                                brezplačni posvet</Link>
                    </div>
                    
                    <Link href="https://themesberg.com/product/tailwind-css/landing-page"
                    className="text-center inline-flex lg:hidden w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg lg:text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Rezervirajte
                    brezplačni posvet</Link>
                </div>
        </section>
    );
};

export default Hero;