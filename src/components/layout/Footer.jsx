import { LogoIcon } from "../../assets/icons";
import telegramIcon from "../../assets/icons/telegram.png";
import whatsapp from "../../assets/icons/whatsapp.png";

const FOOTER_LINKS = [
  { label: "Главная", href: "#home", active: true },
  { label: "О нас", href: "#about" },
  { label: "Наши услуги", href: "#services" },
  { label: "Этапы работы", href: "#process" },
  { label: "Стоимость", href: "#pricing" },
  { label: "Статьи", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-8 md:py-10">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center justify-between gap-6 px-3 text-center lg:flex-row md:px-6 md:text-left">
        {/* Логотип */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <LogoIcon className="h-7 w-7 shrink-0 md:h-9 md:w-9" />
          <span className="flex flex-col text-left">
            <span className="text-[13px] leading-[1.15] font-bold text-text md:text-[15px]">
              <span className="text-primary">Softerio</span>
              <br />
              Technologies
            </span>
            <span className="text-[9px] font-medium tracking-wide text-text-muted uppercase">
              Мы пишем код, который работает
            </span>
          </span>
        </a>

        {/* Навигация: flex-col на мобилке, flex-row на планшете/десктопе */}
        <nav aria-label="Навигация в подвале">
          <ul className="flex flex-col items-center gap-4 lg:flex-row md:gap-6">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors hover:text-primary ${
                    link.active ? "text-primary font-semibold" : "text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Контакты и социальные сети */}
        <div className="flex shrink-0 items-center gap-2 lg:gap-4">
          

          <div className="flex flex-col items-start leading-tight">
            <a
              href="tel:+74993488216"
              className="text-[15px] font-bold whitespace-nowrap text-primary"
            >
              8 (499) 348-82-16
            </a>
            <a
              href="mailto:hello@softerio.ru"
              className="text-xs whitespace-nowrap text-text-muted"
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