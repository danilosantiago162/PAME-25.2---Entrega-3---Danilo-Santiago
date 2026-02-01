"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function DesktopSidebarLayout({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar: só desktop, empurra o conteúdo */}
      <aside
        className={`hidden md:flex border-r-2 border-amber-800 overflow-hidden transition-[width] duration-300 flex-col ${
          open ? "w-64" : "w-0"
        }`}
      >
        <div className="p-4 text-amber-800">
          <p className="font-semibold mb-4">Menu</p>
          <nav className="space-y-2">
            <Link className="block hover:underline" href="/">
              Início
            </Link>
            <Link className="block hover:underline" href="/colecao">
              Coleções
            </Link>
            <Link className="block hover:underline" href="/#fim">
              Sobre a Marca
            </Link>
            <Link className="block hover:underline" href="/carrinho">
              Carrinho
            </Link>
          </nav>
        </div>
        <div className="p-4 border-t h-23 border-t-amber-800">
          <h1 className="flex text-amber-800 justify-center items-center h-23 ">Venha solidificar sua presença moderna no ramo de joias e itens premium</h1>
        </div>
      </aside>

      {/* Área principal */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Header + botão (botão só no desktop) */}
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="hidden md:inline-flex items-center text-amber-800 gap-2 absolute left-4 top-4 z-10 bg-amber-100 backdrop-blur px-3 py-2 rounded-md border border-amber-800"
            aria-label={open ? "Fechar sidebar" : "Abrir sidebar"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          {header}
        </div>

        <main className="flex-1 min-h-0">
            {children}
        </main>

        {footer ? <div>{footer}</div> : null}
      </div>
    </div>
  );
}