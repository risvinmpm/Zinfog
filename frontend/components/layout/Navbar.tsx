"use client";
import React, { useState, useRef } from "react";
import { HoveredLink, MenuItem, ProductItem } from "../Ui/navbar-menu";
import { cn } from "../../lib/utils";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";
import { HiMenu, HiX } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 200); // Delay hiding by 200ms
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50 bg-[#1B1D32]", className)}>
      <div className="mx-auto px-4 md:px-5 xl:px-20">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="logo" width={150} height={50} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            <div
              onMouseEnter={() => handleMouseEnter("Services")}
              onMouseLeave={handleMouseLeave}
            >
              <HoveredLink href="/services/Service">
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
              </HoveredLink>
            </div>

            {/* Products Menu */}
            <div
              onMouseEnter={() => handleMouseEnter("Products")}
              onMouseLeave={handleMouseLeave}
            >
              {/* Products with full link on item */}
              <HoveredLink href="/product/Product">
                <MenuItem setActive={setActive} active={active} item="Products">
                  <div className="text-sm grid grid-cols-2 gap-10 p-4">
                    <ProductItem
                      title="Goldzin"
                      href="/product/Product#goldzin"
                      src="https://assets.aceternity.com/demos/algochurn.webp"
                      description="Prepare for tech interviews like never before."
                    />
                    <ProductItem
                      title="Myzili"
                      href="/product/Product#myzili"
                      src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                      description="Production ready Tailwind css components for your next project"
                    />
                    <ProductItem
                      title="Lanoza"
                      href="/product/Product#lanoza"
                      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                      description="Never write from scratch again. Go from idea to blog in minutes."
                    />
                    <ProductItem
                      title="Zsuite"
                      href="/product/Product#zsuite"
                      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                      description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    />
                  </div>
                </MenuItem>
              </HoveredLink>
            </div>

            {/* Other links */}
            <HoveredLink href="/portfolio/Portfolio">
              <MenuItem setActive={setActive} active={null} item="Portfolio" />
            </HoveredLink>

            <div
              onMouseEnter={() => handleMouseEnter("Company")}
              onMouseLeave={handleMouseLeave}
            >
              <MenuItem setActive={setActive} active={active} item="Company">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/company/AboutUs">About us</HoveredLink>
                  <HoveredLink href="/company/Career">Career</HoveredLink>
                  <HoveredLink href="/company/CaseStudy">Case Study</HoveredLink>
                  <HoveredLink href="/company/LifeZinfog">Life @ zinfog</HoveredLink>
                </div>
              </MenuItem>
            </div>

            <HoveredLink href="/blog/Blog">
              <MenuItem setActive={setActive} active={null} item="Blog" />
            </HoveredLink>

          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <HoveredLink href="/contactus/ContactUs"><Button type="button" title="Contact Us" variant="btn_blue" /></HoveredLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-2xl">
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </div>
  );
}
