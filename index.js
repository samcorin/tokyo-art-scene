import './style';
import { Component } from 'preact';
import { Result } from './result';

const URL = 'https://tokyo-art-scene.firebaseio.com/';
const SEARCH = 'popular';

export default class App extends Component {
	componentDidMount() {
		fetch(`${URL}${SEARCH}.json`)
			.then( r => r.json() )
			.then( json => {
				const arr = Object.keys(json).map(i => json[i]);
				console.log("JSON ", arr);
				this.setState({
					results: json && arr || []
				});

			});
	}

	render(props, { results=[] }) {
		return (
			<div>
				<div class="list">
					{ results.map( result => (
						<Result result={result} />
					)) }
				</div>
			</div>
		);
	}
}
