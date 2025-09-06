const SignInLayout = ({ children }: { children: React.ReactNode }) => {
        return (
                <div className="w-screen h-screen bg-white absolute top-0 left-0 flex items-center justify-center">
                        {children}{" "}
                </div>
        );
};

export default SignInLayout;
