import React, {Component} from 'react';


export default class TodoItem extends Component {
	constructor(props) {
		super(props);

		this.createTask = this.createTask.bind(this);
		this.delete = this.delete.bind(this);
	}

	delete(key){
		this.props.delete(key);
	}

	getClassName(index){
		return index % 3 === 0 ? 'green-bg' : '';
	}

	createTask(item, index){
		return <li 	onClick={() => this.delete(item.key)}
					key={item.key}
					className={this.getClassName(index + 1)}>
						{item.text}
				</li>
	}

	render() {
		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTask)
		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
}
