import React, { useState } from 'react'

export function TaskItem({ id, title, onRemove }) {
  const onClick = () => onRemove(id)
  return (
    <li>
      <span>{title}</span>
      <button id="remove" onClick={onClick}>Remover</button>
    </li>
  )
}

export function TaskList({ tasks, onRemove }) {
  return (
    <section>
      <h2>Tarefas</h2>

      <ul>
        {tasks.map((item, index) => (
          <TaskItem key={item.id} {...item} onRemove={onRemove} />
        ))}

      </ul>
    </section>
  )
}
