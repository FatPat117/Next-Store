"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

const SignOutLink = () => {
        const { toast } = useToast();
        const handleLogOut = () => {
                toast({ description: ":LogOut Successfully" });
        };
        return (
                <SignOutButton>
                        <Link href="/" className="w-full text-left" onClick={handleLogOut}>
                                Log Out
                        </Link>
                </SignOutButton>
        );
};

export default SignOutLink;
