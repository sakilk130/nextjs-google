import Image from 'next/image';

function Avatar({ link, className }: any) {
  return (
    <img
      loading="lazy"
      src={link}
      alt="avatar image"
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
}
export default Avatar;
