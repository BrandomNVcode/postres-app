import React from 'react';


export const Footer = () => {
    return (
            <footer class="p-4 bg-cyan-700 shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-center">
                    <a href="/" class="flex justify-center items-center mb-4 lg:mr-8 sm:mb-0">
                        <img src="./img/logo.png" class="h-24" alt="Flowbite Logo" />
                    </a>
                    <ul class="flex flex-wrap justify-center items-center mb-6 text-sm text-yellow-100 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-yellow-300 sm:text-center dark:text-gray-400">© 2022 <a href="https://noriegaverab.netlify.app/" class="hover:underline">Brandom Noriega Vera</a>. All Rights Reserved.
                </span>
            </footer>
    )
}
