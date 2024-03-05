import Image from "next/image";

const ValueProposition = () => {

    return (
        <section> 
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Vaše stranke
                                odhajajo h konkurenci ...</h2>
                            <p className="mb-8 font-light lg:text-xl">Večina podjetji izgublja stranke ali pa te odhajajo h
                                konkurenci samo zato, ker je njihova prisotnost na spletu pomanjkljiva. </p>
                            <p className="mb-8 font-light lg:text-xl">Spletna stran je v večini primerov prvi stik vašega podjetja s
                                potencialno stranko in če je vaša spletna stran neprivlačna, težko berljiva, počasna in ne
                                komunicira informacij, ki so stranki pomembne gre stranka enostavno k vaši konkurenci.</p>
                            <p className="mb-8 font-light lg:text-xl">Z neprimerno spletno stranjo vašemu podjetju znižujete ugled
                                in izgubljate ogromno prodajnih priložnosti!</p>


                        </div>
                        <Image className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"  src="/illustration1.svg" width={2200} height={1600}
                            alt="dashboard feature image" />
                    </div>

                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <Image className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/illustration2.svg" width={2200} height={1600}
                            alt="feature image 2" />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Lahko je
                                drugače.</h2>
                            <p className="mb-8 font-light lg:text-xl">Predstavljajte si, da vaša spletna stran deluje kot vrhunski
                                prodajalec; je hitra, učinkovita in prodaja 24/7.</p>
                            <p className="mb-8 font-light lg:text-xl">Profesionalno oblikovana spletna stran, ki je optimizirana za
                                konverzije potencialnih strank v kupce dvigne ugled vašega podjetja, izboljša uporabniško
                                izkušnjo in močno dvigne vaš ‘ranking’ na spletnih brskalnikih.</p>
                            <p className="mb-8 font-light lg:text-xl">In ne gre le za estetiko, gre za funkcionalnost, hitrost in
                                sposobnost strani, da potencialno stranko ohranja ‘prilepljeno’ na ekran in jo vodi skozi
                                prodajni proces in spodbudi, da ta vaš izdelek ali storitev dejansko kupi.</p>


                        </div>
                    </div>
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Vaša spletna
                                stran močno vpliva na vašo prodajo.</h2>
                            <p className="mb-8 font-light lg:text-xl">Dobra spletna stran lahko dvigne vašo prodajo za več kot 200%.
                                Mi zasnujemo vašo spletno stran na način, da odpravimo vso trenje, ki ga stranka ponavadi doživi
                                ob nakupu izdelka, razervaciji termina ali pošiljanju povpraševanja.</p>
                            <p className="mb-8 font-light lg:text-xl">Vaša nova spletna stran bo:</p>
                            <ul role="list" className="space-y-5 border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Optimizirana
                                        za konverzije</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Izjemno
                                        hitra</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Estetsko
                                        dovršena</span>
                                </li>
                            </ul>
                        </div>
                        <Image className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/illustration3.svg" width={2200} height={1600}
                            alt="dashboard feature image" />
                    </div>
                </div>
        </section>
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 max-w-screen-xl px-4 mx-auto ">
            <div
                className="flex flex-col lg:flex-row justify-center items-stretch border-gray-200 dark:border-gray-700 mt-8 mb-8  gap-6 lg:gap-8">
            <div className="items-center">
                <div className="mt-6 mb-8">
                    <p className="text-lg font-medium text-purple-600 dark:text-purple-500">Zanesljivi partnerji</p>
                    <h2 className=" mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Sodelovanje z nami so steroidi za vaš posel.</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Naštetih je le nekaj izmed izboljšav, ki jih lahko kot naša stranka pričakujete.</p>
            </div>
            </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="text-center mb-4 flex flex-col">
                        <a href="#" className="flex flex-col items-center text-bold text-lg">
                            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">Povečanje prodaje</h2>
                            <Image src="/prodaja.svg" width={48} height={48} alt="" />
                            <span className="font-light mt-2 text-md text-gray-500  dark:text-gray-400">
                            Naše spletne strani povečajo prodajo do 300% in več v primerjavi z obstoječimi stranmi naših strank.
                            </span>
                        </a>
                    </div>
                    <div className="text-center mb-4 flex flex-col">
                        <a href="#" className="flex flex-col items-center text-bold text-lg">
                            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">Mobilna optimizacija</h2>
                            <Image src="/mobile.svg" width={48} height={48} alt="" />
                            <span className="font-light mt-2 text-md text-gray-500  dark:text-gray-400">
                                Več kot 80% spletnega prometa je na telefonskih zaslonih, zato je mobilna optimizacija ključnega pomena pri prodajnem uspehu.
                            </span>
                        </a>
                    </div>
                    <div className="text-center mb-4 flex flex-col">
                        <a href="#" className="flex flex-col items-center text-bold text-lg">
                            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">Vrhunska varnost</h2>
                            <Image src="/shield.svg" width={48} height={48} alt="" />
                            <span className="font-light mt-2 text-md text-gray-500  dark:text-gray-400">
                                Uporabljamo najvarnejše tehnologije, ki zagotavljajo varnost vaših podatkov, podatkov vaših strank in nemoteno delovanje.
                            </span>
                        </a>
                    </div>
                    <div className="text-center mb-4 flex flex-col">
                        <a href="#" className="flex flex-col items-center text-bold text-lg">
                            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">99.99% Up-time</h2>
                            <Image src="/server.svg" width={48} height={48} alt="" />
                            <span className="font-light mt-2 text-md text-gray-500  dark:text-gray-400">
                                Naše spletne strani obratujejo 24/7, tudi med vzdrževanjem.
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </section>
    );
}

export default ValueProposition;