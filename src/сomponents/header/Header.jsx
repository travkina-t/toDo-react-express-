import React from 'react'

const Header = () => {
  return (
    <div>
        <h1>Список задач</h1>
        <div>
            <label>Темная тема</label>
            <input type="checkbox" name="themeSwitcher" id="themeSwitcher" />
        </div>
    </div>
  )
}

export default Header