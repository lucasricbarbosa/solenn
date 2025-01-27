"use client";

import { CircleUserRoundIcon, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/separator";
import Link from "next/link";

export function HeaderSearchAndProfile() {
  return (
    <div className="flex items-center gap-2">
      <SearchInput />
      <Separator className="h-6 mx-2 bg-white" />
      <Link href={"#"}>
        <Button variant={"ghost"} size={"icon"} className="rounded-full">
          <ShoppingBag className="!size-5" />
        </Button>
      </Link>
      <Link href={"#"}>
        <Button variant={"ghost"} size={"icon"} className="rounded-full p-0.5">
          <CircleUserRoundIcon className="!size-5" />
        </Button>
      </Link>
    </div>
  );
}

function SearchInput() {
  return (
    <div>
      <Button size={"icon"} className="rounded-full" variant={"ghost"}>
        <Search className="!size-5" />
      </Button>
    </div>
  );
}
