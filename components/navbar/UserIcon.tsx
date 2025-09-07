import { currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";

const UserIcon = async () => {
        const user = await currentUser();
        // const userId = await auth()  Only get userid;
        const profileImage = user?.imageUrl;
        if (profileImage) {
                return <img src={profileImage} alt="Profile Image" className="w-6 h-6 rounded-full object-cover" />;
        }
        return <LuUser className="h-6 w-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
