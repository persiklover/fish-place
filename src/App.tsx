import Header from './components/Header';
import SearchResult from './components/SearchResult';
import Button from './UI/Button';
import Input from './UI/Input';
import './sass/style.scss';
import StaticTooltip from './UI/StaticTooltip/StaticTooltip';

export default function App() {
	return (
		<>
			<Header />
			<main>
				<section className="section1">
					<div className="container">
						<div className="section1__inner">

							<div className="section1__title-container">
								<h2 className='section-title'>
									BOOKING складов для рыбопродукции
								</h2>

								<span className="section-subtitle">
									Увеличиваем прибыль компаний, автоматизируя логистические и торговые процессы
								</span>
							</div>

							<div className="section1__form-container">
								<div className="section1__form">
									<h3>Поиск склада</h3>

									<Input
										placeholder='Город и регион'
										label='Начните вводить название'
									/>

									<div>
										<Input
											label='Дата'
											placeholder='Выберите дату'
										/>

										<Input
											label='Рыбопродукция'
											placeholder='Выберите тип'
										/>
									</div>

									<div>
										<Input
											label='Температурный режим'
											placeholder='Укажите режим'
										/>

										<Input
											label='Масса нетто, т'
											placeholder='Введите массу'
										/>
									</div>

									<Button style={{ marginTop: '1rem' }}>
										Показать склады
									</Button>
								</div>
							</div>

						</div>
					</div>
				</section>

				<section className="section2">
					<div className="container">

						<div className="section2__inner">

							<div className="hide-sm">

								<StaticTooltip
									mainTitle='Архангельск'
									firstTitle='25'
									firstSubtitle='Складов'
									secondTitle='20%'
									secondSubtitle='Ср. загруженность'
									tooltipPosition='right'
									style={{ top: '1rem', left: '32.44rem' }}
								/>

								<StaticTooltip
									onlyDot
									style={{ top: '2rem', left: '66.8rem' }}
								/>

								<StaticTooltip
									onlyDot
									style={{ top: '10rem', left: '81rem' }}
								/>

								<StaticTooltip
									onlyDot
									style={{ top: '12.6rem', left: '97rem' }}
								/>

								<StaticTooltip
									mainTitle='Петропавловск-Камчатский'
									firstTitle='25'
									firstSubtitle='Складов'
									secondTitle='20%'
									secondSubtitle='Ср. загруженность'
									tooltipPosition='top'
									style={{ top: '9.1rem', right: '10.7rem' }}
								/>

								<StaticTooltip
									mainTitle='Владивосток'
									firstTitle='25'
									firstSubtitle='Складов'
									secondTitle='20%'
									secondSubtitle='Ср. загруженность'
									tooltipPosition='top'
									style={{ top: '34.7rem', right: '22.8rem' }}
								/>

								<StaticTooltip
									onlyDot
									style={{ top: '25.3rem', left: '70.7rem' }}
								/>

								<StaticTooltip
									mainTitle='Новосибирск'
									firstTitle='25'
									firstSubtitle='Складов'
									secondTitle='20%'
									secondSubtitle='Ср. загруженность'
									tooltipPosition='top'
									style={{ top: '30rem', left: '54rem' }}
								/>
							</div>

							<img
								className='section2__gradient-map'
								src="/src/img/svg/gradient-map.svg"
							/>

							<div className="section2__title-container">
								<h2 className='section-title'>
									Работаем <br /> с большинством складов России
								</h2>

								<span className='section-subtitle'>
									Расширяем географию присутствия
								</span>
							</div>

							<div className="section2__total-list">
								<ul>
									<li>
										<span>130</span>
										Складов подключено
									</li>

									<li>
										<span>20</span>
										Городов России
									</li>
								</ul>
							</div>

							<div className="section2__button-container">
								<Button>
									Подобрать склад
								</Button>
							</div>

						</div>
					</div>
				</section>

				<section className="section3">
					<div className="container">
						<div className="section3-inner">
							<div className="shrink-0">
								<h2 className="section-title">
									Подберем свободные площади по выгодным ценам
								</h2>
								<p className='section-subtitle'>
									Полный список доступных вариантов, отвечающих Вашим требованиям
								</p>
							</div>
							<div className="section3-examples">
								<div style={{ transform: 'scale(.875)' }}>
									<SearchResult
										img="/src/img/company-logo.png"
										name="УрбанФиш"
										city="Владивосток"
										volume="120 000т"
										disabled
									/>
								</div>
								<SearchResult
									img="/src/img/company-logo.png"
									name="УрбанФиш"
									city="Владивосток"
									volume="120 000т"
								/>
								<div style={{ transform: 'scale(.875)' }}>
									<SearchResult
										img="/src/img/company-logo.png"
										name="УрбанФиш"
										city="Владивосток"
										volume="120 000т"
										disabled
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section4">
					<div className="container">
						<div className="section4-inner">
							<h2 className="section-title section4-title">
								Экономим Ваше время,<br/>
								автоматизируя работу со складом
							</h2>

							<ul className="section4-applications">
								<li>
									<div className="section4-card">
										<div className="section4-card-icon">
											<img src="/src/img/application1.svg" alt="" />
										</div>
										<h3>Заявка на хранение</h3>
										<p>Разместить свою рыбопродукцию на&nbsp;складе</p>
										<Button variant="pale">Создать заявку</Button>
									</div>
								</li>
								<li>
									<div className="section4-card">
										<div className="section4-card-icon">
											<img src="/src/img/application2.svg" alt="" />
										</div>
										<h3>Заявка на передачу</h3>
										<p>Передать рыбопродукцию покупателю без смены склада</p>
										<Button variant="pale">Создать заявку</Button>
									</div>
								</li>
								<li>
									<div className="section4-card">
										<div className="section4-card-icon">
											<img src="/src/img/application3.svg" alt="" />
										</div>
										<h3>Заявка на отгрузку</h3>
										<p>Записаться на погрузку рыбопродукции со склада на транспорт</p>
										<Button variant="pale">Создать заявку</Button>
									</div>
								</li>
								<li>
									<div className="section4-card">
										<div className="section4-card-icon">
											<img src="/src/img/application4.svg" alt="" />
										</div>
										<h3>Заявка на договор</h3>
										<p>Заключить договор хранения со складом</p>
										<Button variant="pale">Создать заявку</Button>
									</div>
								</li>
								<li>
									<div className="section4-card">
										<div className="section4-card-icon">
											<img src="/src/img/application5.svg" alt="" />
										</div>
										<h3>Заявка на&nbsp;дополнительные услуги</h3>
										<p>Решить проблему с рыбопродукцией</p>
										<Button variant="pale">Создать заявку</Button>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className="section5">
					<div className="container">
						<div className="section5-inner">
							<h2 className="section-title">Почему клиенты пользуются FishPlace?</h2>
							<p className="section-subtitle">
								Fishplace экономит время и деньги компаний, делая рутинную работу за своих клиентов
							</p>
							<div className="section5-content">
								<div className="section5-card">
									<h3>Стандартный механизм</h3>
									<ul>
										<li>
											<div className="icon-wrapper">
												<img src="/src/img/cross.svg" alt="" />
											</div>
											Поиск места на складах вручную: по телефону
											и в интернете
										</li>
										<li>
											<div className="icon-wrapper">
												<img src="/src/img/cross.svg" alt="" />
											</div>
											Осуществление звонков на каждый склад для
											уточнения информации о свободном месте или
											времени на отгрузку
										</li>
										<li>
											<div className="icon-wrapper">
												<img src="/src/img/cross.svg" alt="" />
											</div>
											Согласование каждой заявки на отгрузку, передачу,
											хранение рыбной продукции - по почте и телефону
										</li>
										<li>
											<div className="icon-wrapper">
												<img src="/src/img/cross.svg" alt="" />
											</div>
											Обмен документами осуществляется по электронной
											почте, нарочно/курьером или почтой России
										</li>
									</ul>
								</div>
								<div className="section5-card">
									<h3>Работа с Fishplace</h3>
									<ul>
										<li>
											<div className="icon-wrapper check">
												<img src="/src/img/check.svg" alt="" />
											</div>
											Автоматическая выдача списка всех действующих
											складов, согласно заданным параметрам
										</li>
										<li>
											<div className="icon-wrapper check">
												<img src="/src/img/check.svg" alt="" />
											</div>
											Получение актуальной информации о свободном
											месте или времени на отгрузку с каждого склада
											в режиме on-line
										</li>
										<li>
											<div className="icon-wrapper check">
												<img src="/src/img/check.svg" alt="" />
											</div>
											Оформление on-line заявки на отгрузку, передачу,
											хранение рыбной продукции в 3 клика
										</li>
										<li>
											<div className="icon-wrapper check">
												<img src="/src/img/check.svg" alt="" />
											</div>
											Электронный документооборот с цифровой подписью
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
