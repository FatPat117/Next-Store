import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
        return (
                <SignIn
                        appearance={{
                                elements: {
                                        card: " x shadow-2xl rounded-2xl p-6 bg-white",
                                        headerTitle: "text-2xl font-bold",
                                        headerSubtitle: "text-lg text-gray-500",
                                        formFieldInput: "text-lg p-3",
                                        formButtonPrimary: "text-lg py-3",
                                },
                        }}
                />
        );
}
