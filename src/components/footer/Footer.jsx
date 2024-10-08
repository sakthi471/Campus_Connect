// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" w-full   py-10 px-20  bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  ">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024  All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <Link href="/privacy">
            Privacy Policy      </Link>
          </li>
          <li>
            <Link href="/terms">
            Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/contact">
            Contact </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
