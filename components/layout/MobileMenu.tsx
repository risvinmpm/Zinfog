"use client";
import React from "react";
import { HoveredLink } from "../Ui/navbar-menu";
import Button from "../common/Button";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col space-y-4 py-4 px-4 md:hidden overflow-hidden
                     backdrop-blur-md bg-white/10 dark:bg-black/20
                     border border-white/20 dark:border-white/10
                     rounded-xl shadow-lg"
        >
          <HoveredLink href="/services/OdooErpDevelopment">Odoo erp development</HoveredLink>
          <HoveredLink href="/services/MobileAppDevelopment">Mobile app development</HoveredLink>
          <HoveredLink href="/services/WebsiteDevelopment">Website development</HoveredLink>
          <HoveredLink href="/services/Branding">Branding</HoveredLink>
          <HoveredLink href="/services/UiUxDesign">UIUX Design</HoveredLink>
          <HoveredLink href="/services/Ecommerce">Ecommerce</HoveredLink>
          <HoveredLink href="/portfolio/Portfolio">Portfolio</HoveredLink>
          <HoveredLink href="/company/AboutUs">About Us</HoveredLink>
          <HoveredLink href="/company/Career">Career</HoveredLink>
          <HoveredLink href="/company/CaseStudy">Case Study</HoveredLink>
          <HoveredLink href="/company/LifeZinfog">Life @ Zinfog</HoveredLink>
          <HoveredLink href="/blog/Blog">Blog</HoveredLink>
          <Button type="button" title="Contact Us" variant="btn_blue" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
