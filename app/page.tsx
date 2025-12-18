'use client';

import { FormEvent, useMemo, useState } from 'react';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type Filter = 'all' | 'active' | 'completed';

const createId = () => crypto.randomUUID();

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: createId(), title: 'Sketch your next idea', completed: false },
    { id: createId(), title: 'Break it into tasks', completed: true },
    { id: createId(), title: 'Ship something small today', completed: false }
  ]);
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) return;

    setTodos((prev) => [
      { id: createId(), title: title.trim(), completed: false },
      ...prev
    ]);
    setTitle('');
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      <header className="header">
        <div>
          <div className="title">
            <span>Stellar Todos</span>
            <span className="badge">{remainingCount} left</span>
          </div>
          <p className="subtitle">
            Add what&apos;s on your mind and check items off as you ship them.
          </p>
        </div>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Add a todo and press enter"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-label="Add a todo"
        />
        <button className="button" type="submit" disabled={!title.trim()}>
          Add
        </button>
      </form>

      <ul className="list" aria-live="polite">
        {filteredTodos.length === 0 && (
          <li className="empty">Nothing here yet — start by adding a task.</li>
        )}
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="item">
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              aria-label={`Mark ${todo.title} as ${
                todo.completed ? 'incomplete' : 'complete'
              }`}
            />
            <p className={`text ${todo.completed ? 'completed' : ''}`}>
              {todo.title}
            </p>
            <button className="clear" onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="actions" aria-label="Todo filters">
        {(['all', 'active', 'completed'] as Filter[]).map((type) => (
          <button
            key={type}
            className={`filter ${filter === type ? 'active' : ''}`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
        <button className="clear" onClick={clearCompleted} disabled={!todos.some((todo) => todo.completed)}>
          Clear completed
        </button>
      </div>

      <p className="footer">
        Todos are stored in memory for now. Refreshing will reset the list.
      </p>
    </main>
  );
}
