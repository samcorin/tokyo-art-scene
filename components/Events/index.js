import { Component } from 'preact';
import Result from './Result';
import './style';

const URL = 'https://tokyo-art-scene.firebaseio.com/';
const SEARCH = 'popular';

export default class Events extends Component {
	componentDidMount() {
		// Fetch 'SEARCH' data
		fetch(`${URL}${SEARCH}.json`)
			.then( r => r.json())
			.then( json => {
				// Convert Obj to an Array of objects
				const arr = Object.keys(json).map(i => json[i]);
				this.setState({
					results: json && arr || []
				});
			});
	}

	render(props, { results=[] }) {
		return (
			<div class="list">
				{ results.map( result => (
					<Result result={result} />
				)) }
			</div>
		);
	}
}
