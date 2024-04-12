"use client";

import { Download, ChevronLeft } from "lucide-react"
import FloatingActionButton from "./FloatingActionButton"
import { usePathname, useRouter } from "next/navigation";

function Nav() {
    
    const router = useRouter();
    const pathname = usePathname();
    const click = () => {
        if(pathname === "/downloads") {
            router.push("/");
        } else {
            router.push("/downloads");
        }
    };

  return (
    <FloatingActionButton onClick={click}>
        { pathname === "/" ? (
            <Download className="size-6 lg:size-8"/>
        ) : (
            <ChevronLeft className="size-6 lg:size-8"/>
        )}

    </FloatingActionButton>
  )
}

export default Nav