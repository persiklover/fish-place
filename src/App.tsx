import Header from './components/Header';

import './sass/style.scss';
import Button from './UI/Button';
import Input from './UI/Input';

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
			</main>
		</>
	);
}
