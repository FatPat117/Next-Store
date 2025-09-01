import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links } from "@/utils/links";
import Link from "next/link";
import { LuAlignLeft } from "react-icons/lu";
import { Button } from "../ui/button";

function LinksDropDown() {
        return (
                <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                                <Button
                                        variant="outline"
                                        className="flex gap-4 max-w-[100px] border-2 border-slate-300 dark:border-slate-700 shadow-sm"
                                >
                                        <LuAlignLeft className="w-6 h-6" />
                                </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
                                {links.map((link) => {
                                        return (
                                                <DropdownMenuItem key={link.href}>
                                                        <Link href={link.href} className="capitalize w-full">
                                                                {link.label}
                                                        </Link>
                                                </DropdownMenuItem>
                                        );
                                })}
                        </DropdownMenuContent>
                </DropdownMenu>
        );
}

export default LinksDropDown;
