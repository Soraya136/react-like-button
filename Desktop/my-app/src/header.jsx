import React, { useState } from 'react';

export default function Header() {
  // وضعیت باز یا بسته بودن منوی موبایل
  const [isOpen, setIsOpen] = useState(false);

  // لیست آیتم‌های منو برای تمیزی و جلوگیری از تکرار کد (DRY)
  const menuItems = [
    { label: 'Home', href: '#home', isActive: true },
    { label: 'About', href: '#about', isActive: false },
    { label: 'Services', href: '#services', isActive: false },
    { label: 'Projects', href: '#projects', isActive: false },
    { label: 'Portfolio', href: '#portfolio', isActive: false },
  ];

  return (
    <header className="w-full bg-[#FCF9F3] border-b border-gray-100 font-sans sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* ۱. بخش لوگو (سمت چپ) */}
        <div className="text-[#8B4513] font-bold text-2xl tracking-wide select-none cursor-pointer hover:opacity-90 transition-opacity">
          Modernism
        </div>

        {/* ۲. منوی ناوبری دسکتاپ (وسط) */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-gray-600">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`transition-colors duration-200 py-2 ${
                item.isActive
                  ? 'text-[#8B4513] relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#8B4513]'
                  : 'hover:text-[#8B4513]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ۳. دکمه دسکتاپ (سمت راست) */}
        <div className="hidden md:block">
          <button className="bg-[#8B4513] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#72380f] active:scale-95 transition-all shadow-sm">
            Get Started
          </button>
        </div>

        {/* ۴. دکمه همبرگری مخصوص موبایل */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8B4513] focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ۵. منوی بازشونده کشویی موبایل */}
      <div
        className={`md:hidden bg-[#FCF9F3] border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 pb-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-[15px] font-medium py-1 ${
                item.isActive ? 'text-[#8B4513] font-bold' : 'text-gray-600 hover:text-[#8B4513]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-[#8B4513] text-white w-full py-2.5 rounded text-sm font-semibold hover:bg-[#72380f] transition-colors mt-2">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
