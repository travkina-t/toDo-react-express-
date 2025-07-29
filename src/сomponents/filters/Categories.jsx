import React from 'react'
import classes from "./Categories.module.css"

const Categories = () => {
  return (
    <div className={classes.container}>
        <div>Все</div>
        <div>Работа</div>
        <div>Учеба</div>
        <div>Дом</div>
    </div>
  )
}

export default Categories