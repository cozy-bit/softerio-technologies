const VARIANT_CLASSES = {
  primary: 'bg-[#EF6461] text-white',
  secondary: 'bg-primary-dark text-white',
}

/**
 * Общая кнопка-CTA лендинга (например «Заказать приложение», «Онлайн-консультация»).
 * Рендерится как <a>, если передан href, иначе как <button>.
 */
function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const classes = `rounded-xl px-7 py-3.5 text-sm font-semibold shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 sm:text-base ${VARIANT_CLASSES[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
