const colorArray = ['bg-aqua', 'bg-yellow', 'bg-orange', 'bg-pink'];

const convertDate = (date) => {
  const newDate = new Date(date);
  const el = newDate.toDateString().split(' ');

  return `${el[0]}, ${el[2].replace(/^0+/, '')} ${el[1]}`;
}

export const Result = ({ result }) => {
	// const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
		// <div class={`overlay ${randomColor}`}>
		
		return (
		<div class="result">
			<div class="overlay blur">
				<img class="cover-img" src={result.thumbnail} />
			</div>
			<div class="text">
				<h2 class="text-blocky1">{result.eventName}</h2>
				<p class="text-blocky2">{result.venueName}</p>
				<div class="details text-blocky2">
					<div class="info">
						<p>{result.permanentEvent === '1' ?
							'Permanent exhibit' :
							`${convertDate(result.dateStart)} - ${convertDate(result.dateEnd)}`}
						</p> 
					</div>
					 <div class="where">
						<p>{result.area}</p>
					</div> 
				</div>
			</div>
		</div>
	);
};