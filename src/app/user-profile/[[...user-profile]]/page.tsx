import { UserProfile } from '@clerk/nextjs'
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import Link from 'next/link';

const UserProfilePage = () => (
    <>
        <div className='mt-5'>
            <Link href="/">
                <Image 
                    src={Logo} 
                    alt="Saas Logo" 
                    height={140} 
                    width={140} 
                    className="cursor-pointer"
                />
            </Link>
            <div className="flex justify-center item-center mt-20">
                <UserProfile path="/user-profile" />
            </div>
        </div>
    </>
)

export default UserProfilePage