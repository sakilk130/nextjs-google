import { useRouter } from 'next/router';
import Image from 'next/image';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import { useRef } from 'react';
import Avatar from '../Avatar/Avatar';
import HeaderOptions from './HeaderOptions/HeaderOptions';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const search = (e: any) => {
    e.preventDefault();
    const term = searchInputRef?.current?.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef?.current?.value = null)}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          link="https://avatars.githubusercontent.com/u/44520484?v=4"
        />
      </div>
      <HeaderOptions/>
    </header>
  );
}

export default Header;
