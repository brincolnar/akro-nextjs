import Image from "next/image";
import Link from 'next/link';

const Collaboration = () => {

    return (
        <section className="py-8 bg-gray-50 dark:bg-gray-800 pb-8"> 
            <div className="flex flex-col lg:flex-row px-4 mx-auto max-w-screen-xl">
                <div className="mx-1 mt-4 lg:mt-0">
                    <Image src="/1.svg" width={16} height={16}
                                    alt="dashboard feature image"
                                    className="mb-2" />
                                    <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">Začetni strateški <br /> posvet</h2>
                    <p className="font-light text-md text-gray-500  dark:text-gray-400">
                    Naša pot se začne z začetnim strateškim posvetom, kjer spoznamo vaše podjetje, cilje in potrebe vaše spletne strani. To je ključni korak, da razumemo vašo vizijo in kako jo lahko uresničimo. Razpravljali bomo o vaši ciljni publiki, želenih funkcionalnostih in morebitnih posebnih zahtevah ali preferencah, ki jih imate glede dizajna.
                    </p>
                </div>
                <div className="mx-1 mt-4 lg:mt-0">
                    <Image src="/2.svg" width={24} height={24}
                                    alt="dashboard feature image"
                                    className="mb-2" />
                                    <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">Oblikovna zasnova <br /> in revizija</h2>
                    <p className="font-light text-md text-gray-500  dark:text-gray-400">
                    Na podlagi začetnega posveta pripravimo predlog oblikovne zasnove, ki ne le izgleda privlačno, ampak je tudi intuitivna za uporabnike. Ta faza vključuje več krogov revizij, kjer lahko podate povratne informacije, da zagotovimo, da končni izdelek popolnoma ustreza vašim željam in potrebam.                    </p>
                </div>
                <div className="mx-1 mt-4 lg:mt-0">
                    <Image src="/3.svg" width={24} height={24}
                                    alt="dashboard feature image"
                                    className="mb-2" />
                                    <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">Dokončna oblikovna <br /> zasnova</h2>
                    <p className="font-light text-md text-gray-500  dark:text-gray-400">
                    Ko je oblikovna zasnova potrjena, pripravimo dokončno verzijo dizajna. Ta korak zajema vse detajle in elemente oblikovanja, ki bodo uporabljeni na spletni strani, vključno z izbiro barv, tipografijo in razporeditvijo elementov, da zagotovimo skladnost in učinkovitost uporabniške izkušnje.                    </p>
                </div>
                <div className="mx-1 mt-4 lg:mt-0">
                    <Image src="/4.svg" width={24} height={24}
                                    alt="dashboard feature image"
                                    className="mb-2" />
                                    <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">Programiranje in <br /> tehnična izvedba</h2>
                    <p className="font-light text-md text-gray-500  dark:text-gray-400">
                    Po odobritvi dokončne oblikovne zasnove sledi faza programiranja in tehnične izvedbe. Naši razvijalci kodirajo in implementirajo funkcionalnosti vaše spletne strani, zagotavljajo njeno odzivnost na različnih napravah in optimizirajo za hitrost in varnost. Skozi celoten proces zagotavljamo, da je spletna stran tehnično brezhibna in pripravljena za uporabnike.                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-4"> {/* Added flex and justify-center utilities */}
                <Link href="https://themesberg.com/product/tailwind-css/landing-page"
                    className="text-white mt-8 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 ">
                    Rezervirajte brezplačni posvet
                </Link>
            </div>
        </section>
    );
}

export default Collaboration;