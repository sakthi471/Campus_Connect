import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LogOut, Plus } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NewPost from '../main/NewPost';
import LogoutBtn from '../main/LogoutBtn';
import { auth } from '@/lib/auth';
import Avathar from '../main/Avathar';
import NewPostDialog from '../main/NewPostDialog';

const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <nav className=" sticky  bg-white top-0 z-10  flex w-full justify-between items-center py-2 px-20 border-b-[1px] border-gray-200 ">
      <div className="flex items-center gap-3">
       
        <h1 className="text-lg font-bold">Hub</h1>
      </div>
      {/* <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="text-sm hover:font-semibold text-slate-500 hover:text-slate-800" href={link.path}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul> */}

      <div className=' flex gap-6 items-center '>
        {session?.user ? <> <NewPostDialog/> <Avathar session={session} />  </> : <Link href="/login"> <Button size='sm'>Login</Button> </Link>}

      </div>
    </nav>
  );
};

export default Navbar;