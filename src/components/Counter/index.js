import React from 'react'
import {connect} from 'react-redux'

const Counter = (props) => {
  return (
    <div>
      <button onClick={() => props.dispatch({ type: 'INCREMENT' })}>+</button>
      {props.count}
      <button onClick={() => props.dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

export default connect(mapStateToProps)(Counter)
