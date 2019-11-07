import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'

const TaskList = ({ data, changeStatus, tag, title, deleteTask, editTask }) => {
	return (
		<List>
			<h2>{title}</h2>
			{data.map((e, i) => (
				<ListItem button key={i}>
					<ListItemText>
						{tag} {e.text}
					</ListItemText>
				</ListItem>
			))}
		</List>
	)
}

export default TaskList
