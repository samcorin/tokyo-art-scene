import { Component } from 'preact';
import Events from './components/Events';
import Description from './components/Description';
import './style';

export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
		}
		
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

	componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({
      width: window.innerWidth
    });
	};
	
	render() {
		const isMobile = window.innerWidth <= 600;
		console.log("ismobile: ", isMobile)
		
		return (
			<div className="wrapper">
				<div className={isMobile ? '' : 'demo'}>
					<div className={isMobile ? 'tasMob' : 'tas'} id="mainScreen"> 
						{!isMobile &&
							<img src={require("./assets/android-template.png")}
									 alt="Android Phone Template"
									 className="phoneImg" />}
						<Events />
					</div>
				</div>
				{!isMobile && <Description />}
			</div>
		);
	}
}
