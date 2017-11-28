import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../../actions'

const Counter = (props) => {
  const {increment, decrement, count} = props
  return (
    <div>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(5)}>+5</button>
      {props.count}
      <button onClick={() => decrement(1)}>-1</button>
      <button onClick={() => decrement(5)}>-5</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}



export default connect(mapStateToProps, {increment: increment, decrement: decrement})(Counter)