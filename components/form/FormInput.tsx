import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
        name: string;
        type: string;
        label?: string;
        defaultValue?: string;
        placeholder?: string;
};
const FormInput = ({ name, type, label, defaultValue, placeholder }: FormInputProps) => {
        return (
                <div className="mb-3 flex flex-col gap-3">
                        {/* Form Input */}
                        <Label htmlFor={name} className="capitalize">
                                {label || name}
                        </Label>
                        <Input
                                id={name}
                                name={name}
                                type={type}
                                defaultValue={defaultValue}
                                placeholder={placeholder}
                                required
                        />
                </div>
        );
};

export default FormInput;
