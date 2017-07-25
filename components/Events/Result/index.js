import { convertDate } from './../../core/Date.js';
// import './style';

export const Result = ({ result }) => {		
	return (
		<div class="resultWrapper">
			<div class="overlay blur">
				<img class="cover-img" src={result.thumbnail} />
			</div>
			<div class="resultText">
				<h2 class="resultHeader blocky-text-1">{result.eventName}</h2>
				<p class="resultBodyText blocky-text-2">{result.venueName}</p>
				<div class="details text-blocky2">
					<div class="info text-outline">
						<p>{`Until ${convertDate(result.dateEnd)}`}</p>
					</div>
					 <div class="where text-outline">
						<p>{result.area}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Result;