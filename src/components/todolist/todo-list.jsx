import React, {Component} from 'react';
import TodoItems from './TodoItem.jsx';
import TodoForm from './TodoForm.jsx';
import './todoList.css';

export default class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			text: ''
		}

		this.addItem = this.addItem.bind(this);
		this.handleText = this.handleText.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(event){
		if(this.state.text !== ''){
			let newItem = {
				text: this.state.text,
				key: Date.now()
			};

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem), //Push method adds an element at the end of the array and returns his length and concat returns the new array
					text: ''
				}
			});		
		}
		event.preventDefault();
	}

	deleteItem(key){
		let filteredItems = this.state.items.filter((item) => item.key !== key);
		this.setState({
			items: filteredItems
		})
	}

	handleText(event){
		this.setState({text: event});
	}

	render() {
		return (
			<div className="todoListMain">
				<TodoForm handleText={this.handleText} addItem={this.addItem} text={this.state.text}/>
				<TodoItems 	entries={this.state.items}
							delete={this.deleteItem}/>
			</div>
		);
	}
}
