import React, { useState } from 'react'

export function TaskList({ tasks }) {
  return (
    <section>
      <h2>Tarefa</h2>

      <ul>
        {tasks.map((item, index) => (
          <li key={item.id}>{item.title}</li>
        ))}

      </ul>
    </section>
  )
}
