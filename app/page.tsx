import { Button } from "@/components/ui/button";

export default function HomePage() {
        return (
                <div>
                        <Button variant={"outline"} size={"lg"} className="capitalize m-8" asChild>
                                Click Me
                        </Button>
                        <h1 className="text-3xl">HomePage</h1>
                </div>
        );
}
