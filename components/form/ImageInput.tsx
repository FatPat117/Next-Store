import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const name = "image";

function ImageInput() {
        return (
                <div className="mb-3 flex flex-col gap-3">
                        <Label htmlFor={name} className="capitalize">
                                Image
                        </Label>
                        <Input id={name} name={name} type="file" required accept="image/*" />
                </div>
        );
}
export default ImageInput;
