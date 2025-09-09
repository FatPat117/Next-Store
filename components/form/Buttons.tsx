"use client";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { LuSquare, LuTrash } from "react-icons/lu";
type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
        className?: string;
        text?: string;
        size?: btnSize;
};

export function SubmitButton({ className = "", text = "submit", size = "lg" }: SubmitButtonProps) {
        const { pending } = useFormStatus();

        return (
                <Button type="submit" disabled={pending} className={`capitalize ${className}`} size={size}>
                        {pending ? (
                                <>
                                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait...
                                </>
                        ) : (
                                text
                        )}
                </Button>
        );
}

type actionType = "edit" | "delete";

export const IconButton = ({ actionType }: { actionType: actionType }) => {
        const { pending } = useFormStatus();
        const renderIcon = () => {
                switch (actionType) {
                        case "edit":
                                return <LuSquare />;
                        case "delete":
                                return <LuTrash />;
                        default:
                                const never: never = actionType;
                                throw new Error(`Invalid action type: ${never}`);
                }
        };

        return (
                <Button variant="link" size="icon" type="submit" className="p-2 cursor-pointer">
                        {pending ? <ReloadIcon className="animate-spin" /> : renderIcon()}
                </Button>
        );
};
