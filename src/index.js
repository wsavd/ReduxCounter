import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './components/Counter'

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

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  )
}

render(<App />, document.getElementById('root'));
