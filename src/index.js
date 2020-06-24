import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <Fragment>
      <Header course={course}/>
      <Content />
      <Total total={total}/>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
