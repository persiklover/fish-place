import Header from './components/Header';
import SearchResult from './components/SearchResult';
import Button from './UI/Button';
import Input from './UI/Input';
import './sass/style.scss';

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

										<Button style={{marginTop: '1rem'}}>
											Показать склады
										</Button>
								</div>
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
			</main>
		</>
	);
}
