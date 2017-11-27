import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../../actions'

const Counter = (props) => {
  return (
    <div>
      <button onClick={() => props.dispatch(increment())}>+</button>
      {props.count}
      <button onClick={() => props.dispatch(decrement())}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

export default connect(mapStateToProps)(Counter)
