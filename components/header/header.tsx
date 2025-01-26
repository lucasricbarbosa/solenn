import Link from "next/link";
import { HeaderNavigation } from "./components/header-navigation";
import { HeaderSearchAndProfile } from "./components/header-search-and-profile";

export function Header() {
  return (
    <header className="border-b w-full bg-white fixed top-0 border-foreground">
      <div className="px-4 py-6 mx-auto max-w-7xl flex items-center justify-between">
        <Link className="uppercase text-xl text-foreground" href={"/"}>
          SOLENN
        </Link>
        <HeaderNavigation />
        <HeaderSearchAndProfile />
      </div>
    </header>
  );
}
