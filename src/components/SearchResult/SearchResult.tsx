import clsx from 'clsx';
import Button from '@/UI/Button';
import './SearchResult.scss';

type SearchResultProps = {
	img:    string;
	name:   string;
	city:   string;
	volume: string;
	disabled?: boolean;
};

export default function SearchResult(props: SearchResultProps) {
	const { img, name, city, volume, disabled } = props;
	return (
		<div className={clsx('search-result', disabled && 'disabled')}>
			<img className="search-result-img" src={img} alt={name} />
			<dl>
				<div>
					<dt>Название</dt>
					<dd>{name}</dd>
				</div>
				<div>
					<dt>Город</dt>
					<dd>{city}</dd>
				</div>
				<div>
					<dt>Свободная емкость</dt>
					<dd>{volume}</dd>
				</div>
			</dl>
			<Button>Забронировать</Button>
		</div>
	);
}
