import React from "react";
import { FloatingDock } from "../components/ui/floating-dock.tsx";
import {
  IconBrandInstagram
  ,
  IconBrandX,
  IconBrandWhatsapp,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className=" h-full w-full text-neutral-500 " />
      ),
      href: "/",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 " />
      ),
      href: "/product",
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 " />
      ),
      href: "https://www.instagram.com/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },

    
  ];
  return (
    (<div className="flex items-center justify-center  w-full bg">
      <FloatingDock
        // mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}