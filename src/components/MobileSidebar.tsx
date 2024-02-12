"use client";

import React from "react";
import { Button } from "./ui/button";
import { Menu, Sidebar } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

type Props = {};

const MobileSidebar = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
