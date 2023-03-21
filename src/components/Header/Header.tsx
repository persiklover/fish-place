import Button from '@/UI/Button';
import './Header.scss';

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header-inner">
					<a href="#">
						<img src="src/img/logo.svg" alt="Fish place logo" />
					</a>
					<nav>
						<ul>
							<li><a href="#">Главная</a></li>
							<li><a href="#">Зарегистрировать склад</a></li>
							<li><a href="#">Заказать транспорт</a></li>
						</ul>
					</nav>
					<div className="flex items-center gap-[1rem]">
						<a className="header-phone" href="tel:8 800 888 88 88">
							<svg xmlns="http://www.w3.org/2000/svg" width="2.4rem" height="2.4rem" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19.44 13c-.22 0-.45-.07-.67-.12a9.439 9.439 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2 12.177 12.177 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48 10.32 10.32 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2.741-1.778c.173-.388.26-.808.259-1.232v-3a3 3 0 0 0-2.47-2.9Zm.5 6a1 1 0 0 1-.723.962 1.05 1.05 0 0 1-.437.038A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82 1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79c.04.273.09.543.15.81.115.527.27 1.045.46 1.55l-1.4.65a1 1 0 0 0-.49 1.33 14.49 14.49 0 0 0 7 7 1 1 0 0 0 .76 0 1 1 0 0 0 .57-.52l.62-1.4a13.68 13.68 0 0 0 1.58.46c.267.06.537.11.81.15a1 1 0 0 1 .79 1l.02 3.12Z" />
							</svg>
							8 800 888 88 88
						</a>
						<Button>Личный кабинет</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
