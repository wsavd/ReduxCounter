import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'

const counterReducer = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return state + 1//возвращаем новую версию состояния
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counterReducer)//создали хранилище состояния и передали функцию по управлению им
const Counter = () => {
  return(
    <div>
      <button onClick={ () => store.dispatch( {type: 'INCREMENT'} ) }>+</button>
      {store.getState()}
      <button onClick={ () => store.dispatch( { type: 'DECREMENT'} ) }>-</button>
    </div>
  )
}

const reduxRender = () => {
  render(<Counter />, document.getElementById('root'));
}

reduxRender()
store.subscribe(reduxRender)//как состояние изменилось, мы рендерим
