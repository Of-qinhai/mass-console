'use client';
import { Input } from "@/components/ui/input";
import { SearchProps } from "@/types/search";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
export default function Search({ queryParams }: SearchProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((param: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set(param, value);
        } else {
            params.delete(param);
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="flex flex-wrap gap-2">
            {queryParams.map(({ name, placeholder }) => (
                <Input
                    key={name}
                    placeholder={`Search by ${placeholder}...`}
                    onChange={(e) => handleSearch(name, e.target.value)}
                    className="w-full md:max-w-sm"
                />
            ))}
        </div>
    )
}