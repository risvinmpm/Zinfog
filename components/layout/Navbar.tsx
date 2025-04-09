"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../Ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0 inset-x-0 max-w-full z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="flex items-center"><Image src="/logo.svg" alt="logo" width={150} height={50} /></Link>
        <div className="flex gap-10 items-center">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/services/OdooErpDevelopment">Odoo erp development</HoveredLink>
              <HoveredLink href="/services/MobileAppDevelopment">Mobile app development</HoveredLink>
              <HoveredLink href="/services/WebsiteDevelopment">Website development</HoveredLink>
              <HoveredLink href="/services/Branding">Branding</HoveredLink>
              <HoveredLink href="/services/UiUxDesign">UIUX Design</HoveredLink>
              <HoveredLink href="/services/Ecommerce">Ecommerce</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Goldzin"
                href="/product/Goldzin"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Myzili"
                href="/product/Myzili"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Lanoza"
                href="/product/Lanoza"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Zsuite"
                href="/product/Zsuite"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <HoveredLink href="/portfolio/Portfolio"><MenuItem setActive={setActive} active={null} item="Portfolo" /></HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Company">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/company/AboutUs">About us</HoveredLink>
              <HoveredLink href="/company/Career">Career</HoveredLink>
              <HoveredLink href="/company/CaseStudy">Case Study</HoveredLink>
              <HoveredLink href="/company/LifeZinfog">Life @ zinfog</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/blog/Blog"><MenuItem setActive={setActive} active={null} item="Blog" /></HoveredLink>
        </div>
        <Button type="button" title="Contact Us" variant="btn_blue" />
      </Menu>
    </div>
  );
}
