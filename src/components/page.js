import React from 'react'
import { connect } from 'react-redux'

import Counter from './counter'
import Clock from './clock'
import { Container } from './styled'

function Page ({ lastUpdate, light, title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </Container>
  )
}

export default connect(state => state)(Page)
