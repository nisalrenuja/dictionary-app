import React from "react";

const Footer = () => {
  return (
    <div
      class="w-full h-16 bg-black border-t-2 border-white
        fixed left-0 bottom-0
        flex justify-center items-center
        text-white text-2xl"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 md:mr-10">
        © 2022{" "}
        <a href="https://github.com/nisalrenuja" class="hover:underline">
          Nisal Renuja™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 ">
        <li>
          <a
            href="https://github.com/nisalrenuja/dictionary-app"
            class="mr-4 hover:underline md:mr-6 "
          >
            Source Code
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nisalrenuja"
            class="mr-4 hover:underline md:mr-6"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
