import { useState, useEffect, useRef } from "react";
import { LogoIcon, ChevronDownIcon } from "../../assets/icons";
import telegramIcon from "../../assets/icons/telegram.png";
import whatsapp from "../../assets/icons/whatsapp.png";

const FOOTER_LINKS = [
  { label: "Главная", href: "#home", active: true },
  { label: "О нас", href: "#about" },
  { label: "Наши услуги", href: "#services" },
  { label: "Этапы работы", href: "#process" },
];

const MORE_LINKS = [
  { label: "Стоимость", href: "#pricing" },
  { label: "Статьи", href: "#articles" },
  { label: "Контакты", href: "#contacts" },
];

function Footer() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);

  // Клик вне дропдауна или Escape закрывают его
  useEffect(() => {
    if (!isMoreOpen) return;

    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") setIsMoreOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMoreOpen]);

  return (
    <footer className=" bg-[#fff8ff] py-8 md:py-10">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center justify-between gap-6 px-3 text-center md:px-6 md:text-left lg:flex-row">
        {/* Логотип */}
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <LogoIcon className="h-7 w-7 shrink-0 md:h-9 md:w-9" />
          <span className="flex flex-col text-left">
            <span className="text-[13px] font-bold leading-[1.15] text-text md:text-[15px]">
              <span className="text-primary">Softerio</span>
              <br />
              Technologies
            </span>
            <span className="text-[9px] font-medium uppercase tracking-wide text-text-muted">
              Мы пишем код, который работает
            </span>
          </span>
        </a>

        {/* Навигация */}
        <nav aria-label="Навигация в подвале">
          <ul className="flex flex-col items-center gap-4 md:gap-6 lg:flex-row">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors hover:text-primary ${
                    link.active ? "font-semibold text-primary" : "text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li ref={moreRef} className="relative">
              <button
                type="button"
                className="flex items-center gap-1.5 text-lg font-medium text-text transition-colors hover:text-primary lg:text-[15px]"
                aria-haspopup="true"
                aria-expanded={isMoreOpen}
                onClick={() => setIsMoreOpen((open) => !open)}
              >
                Ещё
                <ChevronDownIcon
                  className={`transition-transform duration-200 ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMoreOpen && (
                <ul className="mb-3 flex flex-col gap-1 border-l border-border pl-4 lg:absolute lg:bottom-full lg:left-0 lg:mb-2 lg:mt-0 lg:min-w-[160px] lg:gap-0 lg:rounded-xl lg:border lg:bg-surface lg:p-2 lg:shadow-[var(--shadow-card)]">
                  {MORE_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block text-base text-text-muted transition-colors hover:text-primary lg:rounded-lg lg:px-3 lg:py-2 lg:text-[15px] lg:hover:bg-surface-muted lg:hover:text-primary"
                        onClick={() => setIsMoreOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Контакты и социальные сети */}
        <div className="flex shrink-0 items-center gap-2 lg:gap-4">
          <div className="flex flex-col items-start leading-tight">
            <a
              href="tel:+74993488216"
              className="whitespace-nowrap text-[15px] font-bold text-primary"
            >
              8 (499) 348-82-16
            </a>
            <a
              href="mailto:hello@softerio.ru"
              className="whitespace-nowrap text-xs text-text-muted"
            >
              hello@softerio.ru
            </a>
          </div>
          <div className="flex items-center gap-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/74993488216"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4C82F7] transition-opacity hover:opacity-90"
              aria-label="Написать в WhatsApp"
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="h-7 w-7 object-contain invert"
              />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/softerio"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4C82F7] transition-opacity hover:opacity-70"
              aria-label="Написать в Telegram"
            >
              <img
                src={telegramIcon}
                alt="Telegram"
                className="h-5 w-5 object-contain invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
