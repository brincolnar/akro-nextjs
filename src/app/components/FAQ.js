'use client'
import React, { useState } from 'react';

const FAQ = () => {

    // State to track the active/open accordion item
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to handle click events on accordion headers
    const toggleItem = (index) => {
        // If the clicked item is already active, close it, otherwise open the clicked item
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:pb-24 lg:px-6">
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                    Frequently asked questions
                </h2>
                <div className="max-w-screen-md mx-auto">
                    <div id="accordion-flush" data-accordion="collapse">
                        {/* FAQ Item 1 */}
                        <h3 id="accordion-flush-heading-1">
                            <button type="button"
                                    className={`flex items-center justify-between w-full py-5 font-medium text-left ${
                                        activeIndex === 1 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                                    } bg-gray-50 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
                                    onClick={() => toggleItem(1)}
                                    aria-expanded={activeIndex === 1}
                                    aria-controls="accordion-flush-body-1">
                                <span>Koliko časa traja izdelava?</span>
                                <svg data-accordion-icon="" className={`w-6 h-6 ${activeIndex === 1 ? 'rotate-180' : ''} shrink-0`} fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </h3>
                        <div id="accordion-flush-body-1" className={`${activeIndex === 1 ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Spletno stran vam dostavimo ‘na ključ’ v 4 tednih.</p>
                            </div>
                        </div>
                        {/* FAQ Item 2 */}
                        <h3 id="accordion-flush-heading-2">
                            <button type="button"
                                    className={`flex items-center justify-between w-full py-5 font-medium text-left ${
                                        activeIndex === 2 ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                                    } border-b border-gray-200 dark:border-gray-700`}
                                    onClick={() => toggleItem(2)}
                                    aria-expanded={activeIndex === 2}
                                    aria-controls="accordion-flush-body-2">
                                <span>Koliko imam kot naročnik besed pri oblikovanju?</span>
                                <svg data-accordion-icon="" className={`w-6 h-6 ${activeIndex === 2 ? 'rotate-180' : ''} shrink-0`} fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </h3>
                        <div id="accordion-flush-body-2" className={`${activeIndex === 2 ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-2">
                            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Oblika spletne strani je popolnoma odvisna od vaših želj. Predlagamo vam nekaj možnosti, vi pa imate končno besedo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;