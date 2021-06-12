import React, { useEffect, useState } from 'react'
import { Form } from './../components/Form'
import { TaskList } from './../components/TasksList'



export function Home() {
  const [state, setState] = useState([{ id: 1, text: 'tarefa' }])

  const onSuccess = (title) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setState((prev) => [...prev, json])
      })
  }

  const onRemove = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setState(prev => prev.filter(item => item.id !== id))
    })
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(response => response.json())
      .then(json => setState(json))
  }, [])
  return (
    <div id="app">
      <Form onSuccess={onSuccess} />
      <TaskList tasks={state} onRemove={onRemove} />
    </div>
  );
}


