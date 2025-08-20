"use client"; 

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { imagePreloader } from "@/hooks/use-aggressive-image-preloader";
import { products } from "@/data/products";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Preload images when hovering over Products link
  const handleProductsHover = () => {
    const productImages = products.map(p => p.image);
    imagePreloader.preloadBatch(productImages, 'high').catch(console.warn);
  };

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-white/20 p-1 backdrop-blur-md bg-black/10"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab setPosition={setPosition} href="/">Home</Tab>
      <Tab 
        setPosition={setPosition} 
        href="/products" 
        onMouseEnter={handleProductsHover}
      >
        Products
      </Tab>
      <Tab setPosition={setPosition} href="/about">About</Tab>
      <Tab setPosition={setPosition} href="/contact">Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
  onMouseEnter,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
  onMouseEnter?: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
        
        // Call additional hover handler if provided
        onMouseEnter?.();
      }}
      className="relative z-10 block cursor-pointer text-xs uppercase text-white/90 hover:text-white transition-colors duration-200 md:text-base"
    >
      <Link to={href} className="block w-full h-full px-3 py-1.5 md:px-5 md:py-3">{children}</Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-white/20 backdrop-blur-sm md:h-12 pointer-events-none"
    />
  );
};

export default NavHeader;