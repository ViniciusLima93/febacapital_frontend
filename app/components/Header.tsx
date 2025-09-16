"use client";
import { useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary flex items-center justify-between px-4 h-[84px]">
      <Image
        src="/logo.png"
        alt="logo"
        width={81}
        height={32.4}
        className="w-[81px] h-[32.4px]"
      />

     
      <button
        className="lg:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <RiCloseFill /> : <IoMenuSharp />}
      </button>

    
      <nav className="hidden lg:flex flex-row justify-center items-center lg:w-full lg:h-[84px] gap-10">
        <a href="#">HOME</a>
        <a href="#">SOBRE A LIVA</a>
        <a href="#">EMPREEENDIMENTOS</a>
        <a href="#">NOTÍCIAS</a>
        <a href="#">CONTATOS</a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <button className="flex flex-row items-center gap-2 px-3 py-2 bg-[var(--bt-primary-color)] text-white rounded">
          <FaWhatsapp color="white" />
          WHATSAPP
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute top-[84px] left-0 w-full bg-primary flex flex-col items-center gap-4 py-6 lg:hidden shadow-md">
          <a href="#">HOME</a>
          <a href="#">SOBRE A LIVA</a>
          <a href="#">EMPREEENDIMENTOS</a>
          <a href="#">NOTÍCIAS</a>
          <a href="#">CONTATOS</a>
            <p>Acompanhe nas redes</p>
             <div className="flex gap-4">
            <FaFacebook />
            <AiFillInstagram />
          </div>
          <button className="flex flex-row items-center gap-2 px-3 py-2 bg-[var(--bt-primary-color)] text-white rounded">
            <FaWhatsapp color="white" />
            WHATSAPP
          </button>
        </div>
      )}
    </header>
  );
}
