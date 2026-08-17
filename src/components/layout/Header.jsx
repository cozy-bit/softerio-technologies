import { useState } from 'react'
import {
  LogoIcon,
  MenuIcon,
  CloseIcon,
} from '../../assets/icons'
import Navigation from './Navigation'
import telegramIcon from '../../assets/icons/telegram.png'
import whatsapp from '../../assets/icons/whatsapp.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface shadow-[var(--shadow-header)]">
      <div className="mx-auto flex h-[72px] max-w-[1288px] items-center gap-2 px-3 sm:h-16 sm:gap-3 md:px-6 lg:gap-6">
        {/* логотип */}
        <a href="#home" className="flex min-w-0 shrink items-center gap-2.5 md:shrink-0">
          <LogoIcon className="h-7 w-7 shrink-0 md:h-9 md:w-9" />
          <span className="flex flex-col">
            <span className="text-[13px] leading-[1.15] font-bold text-text md:text-[15px]">
              <span className="text-primary">Softerio</span>
              <br />
              Technologies
            </span>
            <span className="hidden text-[9px] font-medium tracking-wide text-text-muted uppercase sm:block">
              Мы пишем код, который работает
            </span>
          </span>
        </a>

        {/* кнопка гамбургер меню для мобильных */}
        <button
          type="button"
          className="order-3 ml-auto flex shrink-0 p-0.5 text-text lg:hidden"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>

        <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        {/* контакты и социальные сети */}
        <div className="order-2 ml-auto flex shrink-0 items-center gap-2 lg:order-none lg:ml-0 lg:gap-4">
          <div className="hidden flex-col items-end leading-tight lg:flex">
            <a href="tel:+74993488216" className="text-[15px] font-bold whitespace-nowrap text-primary">
              8 (499) 348-82-16
            </a>
            <a href="mailto:hello@softerio.ru" className="text-xs whitespace-nowrap text-text-muted">
              hello@softerio.ru
            </a>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {/* whatsapp */}
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

            {/* telegram */}
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
    </header>
  )
}

export default Header