import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {//dynamic: we use props
	render() {
		console.log(this.props);
		return (
			<div>
				<h1 style={{color: this.props.color}}>
					{this.props.msg}
				</h1>

				<p>
					ill check back in {this.props.minutes} minutes
				</p>
			</div>
		)
	}
}

ReactDOM.render(<Message msg="How are you?" color="blue" minutes={5}/>, document.getElementById('root'))