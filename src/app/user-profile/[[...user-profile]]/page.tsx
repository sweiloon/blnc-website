import { UserProfile } from '@clerk/nextjs'
import { Header } from '@/sections/Header'

const UserProfilePage = () => 
    <>
        <Header />
        <div className="flex justify-center item-center mt-20">
            <UserProfile path="/user-profile" />
        </div>
    </>

export default UserProfilePage