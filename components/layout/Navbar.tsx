"use client";
import React, { useState } from "react";
import { HoveredLink, MenuItem, ProductItem } from "../Ui/navbar-menu";
import { cn } from "../../lib/utils";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";
import { HiMenu, HiX } from "react-icons/hi";
import MobileMenu from "../layout/MobileMenu";

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

            <HoveredLink href="/portfolio/Portfolio">
              <MenuItem setActive={setActive} active={null} item="Portfolio" />
            </HoveredLink>

            <MenuItem setActive={setActive} active={active} item="Company">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/company/AboutUs">About us</HoveredLink>
                <HoveredLink href="/company/Career">Career</HoveredLink>
                <HoveredLink href="/company/CaseStudy">Case Study</HoveredLink>
                <HoveredLink href="/company/LifeZinfog">Life @ zinfog</HoveredLink>
              </div>
            </MenuItem>

            <HoveredLink href="/blog/Blog">
              <MenuItem setActive={setActive} active={null} item="Blog" />
            </HoveredLink>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button type="button" title="Contact Us" variant="btn_blue" />
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
// 'use client';

// import { useState } from 'react';
// import LinkWrapper from '../Ui/LinkWrapper';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// interface NavItem {
//   name: string;
//   to?: string;
//   dropdown?: { name: string; to: string }[];
// }

// const navItems: NavItem[] = [
//   { name: 'About', to: '/company/AboutUs' },
//   {
//     name: 'Services',
//     dropdown: [
//       { name: 'Odoo erp development', to: '/services/OdooErpDevelopment' },
//       { name: 'Mobile app development', to: '/services/MobileAppDevelopment' },
//     ],
//   },
//   { name: 'Contact', to: '/contact' },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
//   const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);

//   const toggleMenu = () => setMenuOpen(prev => !prev);

//   return (
//     <nav className="bg-[#1B1D32] shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         {/* Brand (Logo) */}
//         <div className="cursor-default">
//           <LinkWrapper to='/'><Image src="/logo.svg" width={150} height={50} alt="logo" /></LinkWrapper>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-1 justify-center space-x-6 items-center">
//           {navItems.map((item, idx) =>
//             item.dropdown ? (
//               <div
//                 key={idx}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredDropdown(idx)}
//                 onMouseLeave={() => setHoveredDropdown(null)}
//               >
//                 <button className="hover:text-blue-600 transition font-medium">
//                   {item.name}
//                 </button>
//                 <AnimatePresence>
//                   {hoveredDropdown === idx && (
//                     <motion.ul
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ type: 'tween', duration: 0.2 }}
//                       className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-54 bg-black shadow-lg rounded-md py-2 z-10"
//                     >
//                       {item.dropdown.map((sub, subIdx) => (
//                         <li key={subIdx} className="px-4 py-2 hover:bg-gray-900 text-center">
//                           <LinkWrapper to={sub.to}>{sub.name}</LinkWrapper>
//                         </li>
//                       ))}
//                     </motion.ul>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <LinkWrapper
//                 key={idx}
//                 to={item.to!}
//                 className="hover:text-blue-600 transition font-medium"
//               >
//                 {item.name}
//               </LinkWrapper>
//             )
//           )}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden md:block">
//           <LinkWrapper
//             to="/signup"
//             className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-medium"
//           >
//             Sign Up
//           </LinkWrapper>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-2xl focus:outline-none">
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.ul
//             initial={{ height: 0 }}
//             animate={{ height: 'auto' }}
//             exit={{ height: 0 }}
//             className="md:hidden bg-black shadow-inner overflow-hidden"
//           >
//             {navItems.map((item, idx) =>
//               item.dropdown ? (
//                 <div key={idx}>
//                   <button
//                     onClick={() =>
//                       setOpenMobileDropdown(openMobileDropdown === idx ? null : idx)
//                     }
//                     className="block w-full text-left px-4 py-3 border-b border-gray-200"
//                   >
//                     {item.name}
//                   </button>
//                   {openMobileDropdown === idx && (
//                     <div className="pl-6">
//                       {item.dropdown.map((sub, subIdx) => (
//                         <LinkWrapper
//                           key={subIdx}
//                           to={sub.to}
//                           className="block px-4 py-2 hover:bg-gray-100"
//                         >
//                           {sub.name}
//                         </LinkWrapper>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <li key={idx} className="border-b border-gray-200">
//                   <LinkWrapper to={item.to!} className="block px-4 py-3">
//                     {item.name}
//                   </LinkWrapper>
//                 </li>
//               )
//             )}

//             {/* Mobile CTA */}
//             <li className="px-4 py-3">
//               <LinkWrapper
//                 to="/signup"
//                 className="block w-full text-center bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
//               >
//                 Sign Up
//               </LinkWrapper>
//             </li>
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
