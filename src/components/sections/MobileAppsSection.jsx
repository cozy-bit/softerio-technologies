import rightBottom from '../../assets/mobileAppsSection-images/right-bottom.png'
import leftLower from '../../assets/mobileAppsSection-images/left-lower.png'

const plans = [
	{
		title: 'Типовой',
		icon: 'phone',
		color: 'blue',
		price: '1 000 000 руб.',
		features: [
			'Каталог товаров или услуг',
			'Сделать заказ',
			'Новости и акции',
			'Обратная связь',
			'Контакты',
		],
	},
	{
		title: 'Бизнес',
		icon: 'briefcase',
		color: 'blue',
		price: '2 000 000 руб.',
		popular: true,
		features: [
			'Программа лояльности',
			'Push уведомления',
			'Серверная часть',
			'Панель управления',
			'Чаты',
		],
	},
	{
		title: 'Кастом',
		icon: 'settings',
		color: 'red',
		price: '3 000 000 руб.',
		features: [
			'Автоматизация бизнес-процессов',
			'Сложные интеграции',
			'Маркетплейс',
			'Корпоративные решения',
			'Smart TV, Kit, VR \\ AR',
		],
	},
]

const PhoneIcon = () => (
	<svg viewBox='0 0 48 48' fill='none' className='h-10 w-10 sm:h-11 sm:w-11'>
		<rect
			x='13'
			y='5'
			width='22'
			height='38'
			rx='4'
			stroke='currentColor'
			strokeWidth='2'
		/>
		<rect x='17' y='10' width='14' height='24' rx='1' fill='#EFF6FF' />
		<path
			d='M20 16h8M20 20h8M20 24h5'
			stroke='#3B82F6'
			strokeWidth='2'
			strokeLinecap='round'
		/>
		<circle cx='24' cy='38' r='1.5' fill='currentColor' />
	</svg>
)

const BriefcaseIcon = () => (
	<svg viewBox='0 0 48 48' fill='none' className='h-10 w-10 sm:h-11 sm:w-11'>
		<rect
			x='7'
			y='15'
			width='34'
			height='24'
			rx='4'
			fill='#DCEBFF'
			stroke='currentColor'
			strokeWidth='2'
		/>
		<path
			d='M17 15v-3.5A3.5 3.5 0 0 1 20.5 8h7a3.5 3.5 0 0 1 3.5 3.5V15'
			stroke='currentColor'
			strokeWidth='2'
		/>
		<path d='M7 24h34M21 24v3h6v-3' stroke='currentColor' strokeWidth='2' />
		<rect x='21' y='23' width='6' height='5' rx='1' fill='#60A5FA' />
	</svg>
)

const SettingsIcon = () => (
	<svg viewBox='0 0 48 48' fill='none' className='h-10 w-10 sm:h-11 sm:w-11'>
		<path
			d='M20.7 7.7a4 4 0 0 1 6.6 0l1.4 2.1a16 16 0 0 1 3.5 2l2.5-.3a4 4 0 0 1 4.2 4.9l-.6 2.5a16 16 0 0 1 0 4.1l.6 2.5a4 4 0 0 1-4.2 4.9l-2.5-.3a16 16 0 0 1-3.5 2l-1.4 2.1a4 4 0 0 1-6.6 0l-1.4-2.1a16 16 0 0 1-3.5-2l-2.5.3a4 4 0 0 1-4.2-4.9l.6-2.5a16 16 0 0 1 0-4.1l-.6-2.5a4 4 0 0 1 4.2-4.9l2.5.3a16 16 0 0 1 3.5-2l1.4-2.1Z'
			fill='#FEE2E2'
			stroke='currentColor'
			strokeWidth='1.8'
		/>
		<circle
			cx='24'
			cy='21'
			r='6'
			fill='#EF4444'
			stroke='currentColor'
			strokeWidth='1.8'
		/>
		<circle cx='24' cy='21' r='2.2' fill='white' />
	</svg>
)

const CheckIcon = ({ red = false }) => (
	<span
		className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${
			red ? 'bg-red-500' : 'bg-blue-500'
		}`}
	>
		<svg viewBox='0 0 16 16' fill='none' className='h-3.5 w-3.5 text-white'>
			<path
				d='m4 8 2.3 2.3L12 4.8'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	</span>
)

const Ribbon = ({ red = false, popular = false }) => (
	<div
		className={`absolute right-8 top-0 z-10 h-[70px] w-[34px] ${
			red ? 'bg-red-500' : 'bg-blue-600'
		}`}
		style={{
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 76%, 0 100%)',
		}}
	>
		{popular && (
			<svg
				viewBox='0 0 24 24'
				fill='none'
				className='absolute left-1/2 top-3 h-5 w-5 -translate-x-1/2 text-white'
			>
				<path
					d='m12 3 2.1 5.1 5.4.4-4.1 3.5 1.3 5.3L12 14.4l-4.7 2.9 1.3-5.3-4.1-3.5 5.4-.4L12 3Z'
					fill='currentColor'
				/>
			</svg>
		)}
	</div>
)

const MobileAppsSection = () => {
	return (
		<section className='relative overflow-hidden bg-[#fff8ff] py-16 sm:py-20 lg:py-40  '>
			{/* background images */}
			<div className='pointer-events-none absolute inset-0 overflow-hidden'>
				<img
					src={leftLower}
					alt=''
					className='absolute left-[80px] top-[80px] hidden w-[100px] lg:block'
				/>

				<img
					src={rightBottom}
					alt=''
					className='absolute bottom-[25px] z-10 right-[-20px] hidden  lg:block'
				/>
			</div>
			<div className='relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10'></div>

			<div className='mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10'>
				<div className='mx-auto max-w-[900px] text-center'>
					<h2 className='text-[32px] font-bold leading-[1.08] tracking-[-0.8px] text-[#111827] sm:text-[42px] lg:text-[48px]'>
						Стоимость разработки мобильных приложений
					</h2>

					<p className='mx-auto mt-6 max-w-[850px] text-[14px] leading-[1.55] text-[#6B7280] sm:text-[15px] lg:text-[16px]'>
						Мы собрали стандартные элементы приложений в пакеты, для примерного
						понимания стоимости разработки. Чтобы заказать мобильное приложение
						свяжитесь с нами, мы вас проконсультируем, проведем аудит ценовых
						предложений других студий. Ниже цены на типовые приложения.
					</p>
				</div>

				<div className='mt-12 grid items-stretch gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6'>
					{plans.map(plan => {
						const isRed = plan.color === 'red'

						return (
							<article
								key={plan.title}
								className={`relative flex min-h-[570px] flex-col rounded-[22px] border bg-white px-6 pb-7 pt-10 shadow-[0_12px_35px_rgba(17,24,39,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(17,24,39,0.13)] sm:px-8 sm:pt-12 ${
									plan.popular
										? 'border-blue-100 shadow-[0_18px_45px_rgba(37,99,235,0.13)]'
										: 'border-transparent'
								}`}
							>
								<Ribbon red={isRed} popular={plan.popular} />

								<div className='flex justify-center'>
									<div
										className={`flex h-[78px] w-[78px] items-center justify-center rounded-full ${
											isRed ? 'bg-red-50' : 'bg-blue-50'
										}`}
									>
										<div className={isRed ? 'text-red-500' : 'text-[#1D2939]'}>
											{plan.icon === 'phone' && <PhoneIcon />}
											{plan.icon === 'briefcase' && <BriefcaseIcon />}
											{plan.icon === 'settings' && <SettingsIcon />}
										</div>
									</div>
								</div>

								<div className='mt-5 text-center'>
									<h3 className='text-[25px] font-bold tracking-[-0.4px] text-[#111827] sm:text-[27px]'>
										{plan.title}
									</h3>

									<div
										className={`mx-auto mt-3 h-[3px] w-11 rounded-full ${
											isRed ? 'bg-red-500' : 'bg-blue-500'
										}`}
									/>
								</div>

								<ul className='mt-6'>
									{plan.features.map((feature, index) => (
										<li
											key={feature}
											className={`flex min-h-[47px] items-center justify-between gap-4 border-b border-[#E8ECF2] text-[14px] leading-5 text-[#182230] sm:text-[15px] ${
												index === 0 ? 'border-t' : ''
											}`}
										>
											<span>{feature}</span>

											<CheckIcon red={isRed} />
										</li>
									))}
								</ul>

								{plan.title !== 'Типовой' && (
									<button
										type='button'
										className={`mx-auto mt-4 flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium transition ${
											isRed
												? 'bg-red-50 text-red-500 hover:bg-red-100'
												: 'bg-blue-50 text-blue-500 hover:bg-blue-100'
										}`}
									>
										Показать полностью
										<svg
											viewBox='0 0 16 16'
											fill='none'
											className='h-3.5 w-3.5'
										>
											<path
												d='m4 6 4 4 4-4'
												stroke='currentColor'
												strokeWidth='1.7'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</button>
								)}

								<div className='mt-auto pt-8'>
									<p className='text-center text-[25px] font-bold tracking-[-0.3px] text-[#111827] sm:text-[27px]'>
										{plan.price}
									</p>

									<button
										type='button'
										className={`mt-5 h-[56px] w-full rounded-[9px] text-[15px] font-medium transition duration-200 ${
											plan.popular
												? 'bg-blue-500 text-white shadow-[0_8px_20px_rgba(59,130,246,0.25)] hover:bg-blue-600 hover:shadow-[0_10px_25px_rgba(59,130,246,0.35)]'
												: 'border-[1.5px] border-blue-500 bg-white text-blue-500 hover:bg-blue-50'
										}`}
									>
										Заказать приложение
									</button>
								</div>
							</article>
						)
					})}
				</div>

				<div className='mt-7 flex justify-center gap-2 md:hidden'>
					<span className='h-2.5 w-2.5 rounded-full bg-blue-500' />
					<span className='h-2.5 w-2.5 rounded-full bg-gray-300' />
					<span className='h-2.5 w-2.5 rounded-full bg-gray-300' />
				</div>
			</div>
		</section>
	)
}

export default MobileAppsSection
