import React from 'react';

const TodoForm = ({addItem, text, handleText}) => {
  return (
    <div className="header">
		<form onSubmit={addItem}>
			<input value={text} placeholder="Enter Task"  onChange={(e) => handleText(e.target.value)}/>
			<button type="submit">Add</button>
		</form>
	</div>
  )
}

export default TodoForm;