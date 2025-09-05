"use client";
import { Input } from "@/components/ui/input";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const NavSearch = () => {
        const searchParams = useSearchParams();
        const { replace } = useRouter();
        const [search, setSearch] = useState(searchParams.get("search")?.toString() || "");

        const handleSearch = useDebouncedCallback((searchInput: string) => {
                const params = new URLSearchParams(searchParams);
                if (searchInput) {
                        params.set("search", searchInput);
                } else {
                        params.delete("search");
                }
                replace(`/products?${params.toString()}`);
        }, 500);

        useEffect(() => {
                const currentSearch = searchParams.get("search");
                if (!currentSearch) {
                        setSearch("");
                }
        }, [searchParams]);
        return (
                <Input
                        name=""
                        type="search"
                        placeholder="search product..."
                        className="max-w-xs dark:bg-muted"
                        value={search}
                        onChange={(e) => {
                                setSearch(e.target.value);
                                handleSearch(e.target.value);
                        }}
                ></Input>
        );
};

export default NavSearch;
