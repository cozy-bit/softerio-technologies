import { ChevronDownIcon, WhatsAppIcon, TelegramIcon } from '../../assets/icons'

const NAV_LINKS = [
  { label: 'Главная', href: '#home', active: true },
  { label: 'О нас', href: '#about' },
  { label: 'Наши услуги', href: '#services' },
  { label: 'Этапы работы', href: '#process' },
  { label: 'Стоимость', href: '#pricing' },
]

const navLinkClasses = (active) =>
  `whitespace-nowrap text-[15px] font-medium transition-colors hover:text-primary lg:text-sm ${
    active ? 'text-primary' : 'text-text'
  }`

/**
 * Основная навигация сайта: список ссылок + мобильный выезжающий drawer
 * с контактами. Открытием/закрытием drawer управляет родитель (Header),
 * который владеет состоянием isMenuOpen.
 */
function Navigation({ isOpen, onClose }) {
  return (
    <nav
      className={`fixed inset-x-0 top-16 bottom-0 flex flex-col justify-start overflow-y-auto bg-surface p-6 transition-transform duration-250 ease-out md:static md:flex md:flex-1 md:translate-x-0 md:flex-row md:justify-center md:overflow-visible md:bg-transparent md:p-0 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      aria-label="Основная навигация"
    >
      <ul className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-4 lg:gap-7">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`text-lg md:text-[15px] ${navLinkClasses(link.active)}`}
              onClick={onClose}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="flex items-center gap-1.5 text-lg font-medium text-text transition-colors hover:text-primary md:text-[15px]"
          >
            Ещё
            <ChevronDownIcon />
          </button>
        </li>
      </ul>

      {/* Контакты показываются только внутри мобильного drawer */}
      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 md:hidden">
        <div className="flex flex-col gap-1">
          <a href="tel:+74993488216" className="text-lg font-bold text-primary">
            8 (499) 348-82-16
          </a>
          <a href="mailto:hello@softerio.ru" className="text-sm text-text-muted">
            hello@softerio.ru
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/74993488216"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent-purple text-white"
            aria-label="Написать в WhatsApp"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://t.me/softerio"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent-purple text-white"
            aria-label="Написать в Telegram"
          >
            <TelegramIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
