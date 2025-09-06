import React from "react";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
        return <div className={`${className} mx-auto max-w-6xl xl:max-w-screen-xl lg:px-8`}>{children}</div>;
};

export default Container;
