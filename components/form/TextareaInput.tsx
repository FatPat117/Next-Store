import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
        name: string;
        label?: string;
        defaultValue?: string;
};

function TextAreaInput({ name, label, defaultValue }: TextAreaInputProps) {
        return (
                <div className="mb-3 flex flex-col gap-3">
                        <Label htmlFor={name} className="capitalize">
                                {label || name}
                        </Label>
                        <Textarea
                                id={name}
                                name={name}
                                defaultValue={defaultValue}
                                rows={5}
                                required
                                className="leading-loose"
                        />
                </div>
        );
}

export default TextAreaInput;
