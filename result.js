// BW:
// blur op2

const colorArray = ['bg-aqua', 'bg-yellow', 'bg-orange'];

export const Result = ({ result }) => {
	
	const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
	
	return (
		<div class="result">
			<div class={`overlay ${randomColor}`}>
				<img class="cover-img" src={result.thumbnail} />
			</div>
			<div class="text">
				<p>hello</p>
			</div>

			{/* <div class="tint"></div> */}
			{/* <a href={result.html_url} class="blur" target="_blank">
				{result.full_name}
			</a> */}
		</div>
	)
};
