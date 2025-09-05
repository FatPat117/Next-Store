const EmptyList = ({ heading = "No items found", className }: { heading?: string; className?: string }) => {
        return <h2 className={`${className} text-xl`}>{heading}</h2>;
};

export default EmptyList;
