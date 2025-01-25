import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function NavigationMenuDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm">
            Categorias
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-72">
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function HeaderNavigation() {
  return (
    <nav className="flex items-center gap-6">
      <NavigationMenuDropdown />
      <Link className="text-sm font-medium" href={"#"}>
        Latest products
      </Link>
      <Link className="text-sm font-medium" href={"#"}>
        Our colection
      </Link>
      <Link className="text-sm font-medium" href={"#"}>
        About us
      </Link>
    </nav>
  );
}
