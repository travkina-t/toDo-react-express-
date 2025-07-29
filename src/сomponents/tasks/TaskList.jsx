import React from 'react'
import classes from "./Tasklist.module.css"
import TaskColumn from "./TaskColumn.jsx"

const TaskList = () => {
  return (
    <div className={classes.container}>
        <TaskColumn />
        <TaskColumn />
        <TaskColumn />
    </div>
  )
}

export default TaskList