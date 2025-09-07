import UserIcon from "@/components/navbar/UserIcon";
import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links } from "@/utils/links";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { LuAlignLeft } from "react-icons/lu";
import { Button } from "../ui/button";
import SignOutLink from "./SignOutLink";
function LinksDropDown() {
        const { userId } = auth();
        const isAdminUser = userId === process.env.ADMIN_USER_ID;
        return (
                <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                                <Button
                                        variant="outline"
                                        size={"sm"}
                                        className="flex gap-4 max-w-[100px] border-2 border-slate-300 dark:border-slate-700 shadow-sm"
                                >
                                        <LuAlignLeft className="w-6 h-6" />
                                        <UserIcon />
                                </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
                                {/* SignedOut Component from clerk */}
                                <SignedOut>
                                        <DropdownMenuItem>
                                                <SignInButton mode="modal">
                                                        <button className="w-full text-left">Login</button>
                                                </SignInButton>
                                        </DropdownMenuItem>

                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem>
                                                <SignUpButton mode="modal">
                                                        <button className="w-full text-left">Register</button>
                                                </SignUpButton>
                                        </DropdownMenuItem>
                                </SignedOut>

                                {/* SignedIn Component from clerk */}
                                <SignedIn>
                                        {links.map((link) => {
                                                if (link.label == "dashboard" && !isAdminUser) return null;
                                                return (
                                                        <DropdownMenuItem key={link.href}>
                                                                <Link href={link.href} className="capitalize w-full">
                                                                        {link.label}
                                                                </Link>
                                                        </DropdownMenuItem>
                                                );
                                        })}
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                                <SignOutLink />
                                        </DropdownMenuItem>
                                </SignedIn>
                        </DropdownMenuContent>
                </DropdownMenu>
        );
}

export default LinksDropDown;
