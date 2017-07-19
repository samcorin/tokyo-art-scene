const colorArray = ['bg-aqua', 'bg-yellow', 'bg-orange', 'bg-pink'];

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
						<p>Ends {result.dateEnd}</p>
					</div>
					 <div class="where">
						<p>{result.area}</p>
					</div> 
				</div>
			</div>
		</div>
	);
};