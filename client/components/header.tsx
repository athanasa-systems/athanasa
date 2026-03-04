import { ChevronDown } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-full w-full transition-all duration-300 bg-background sticky top-0 z-40">
      <div className="flex items-center h-22 max-w-360 mx-auto px-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Link href={"/"}>{/* Add logo or brand name here */}</Link>
          </div>
          <nav className="flex w-full">
            <ul className="flex items-center flex-1 list-none p-0 m-0 gap-4">
              <li className="group relative before:content-[''] before:absolute before:top-0.5 before:right-0.5 before:bottom-0.5 before:left-0.5 before:w-auto before:h-auto before:bg-transparent before:rounded-[1.5625rem] before:cursor-pointer hover:before:border hover:before:border-(--border-default) hover:before:opacity-100">
                <button className="relative pt-2 pr-8 pb-2 pl-3 leading-normal before:content-[''] before:absolute before:top-0.5 before:right-0.5 before:bottom-0.5 before:left-0.5 before:w-auto before:h-auto before:bg-transparent before:rounded-[1.5625rem] before:cursor-pointer hover:before:opacity-100 hover:text-foreground">
                  Products
                  <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-200 ease-in-out stroke-foreground stroke-[3px] group-hover:rotate-180" />
                </button>
              </li>
              <li className="group relative before:content-[''] before:absolute before:top-0.5 before:right-0.5 before:bottom-0.5 before:left-0.5 before:w-auto before:h-auto before:bg-transparent before:rounded-[1.5625rem] before:cursor-pointer hover:before:border hover:before:border-(--border-default) hover:before:opacity-100">
                <button className="relative pt-2 pr-8 pb-2 pl-3 leading-normal before:content-[''] before:absolute before:top-0.5 before:right-0.5 before:bottom-0.5 before:left-0.5 before:w-auto before:h-auto before:bg-transparent before:rounded-[1.5625rem] before:cursor-pointer hover:before:opacity-100 hover:text-foreground">
                  Resources
                  <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-200 ease-in-out stroke-foreground stroke-[3px] group-hover:rotate-180" />
                </button>
              </li>
              <li className="group relative before:content-[''] before:absolute before:top-0.5 before:right-0.5 before:bottom-0.5 before:left-0.5 before:w-auto before:h-auto before:bg-transparent before:rounded-[1.5625rem] before:cursor-pointer hover:before:border hover:before:border-(--border-default) hover:before:opacity-100">
                <Link
                  href={"/pricing"}
                  className="flex items-center py-2 px-3 leading-normal relative"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
