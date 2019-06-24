import Link from 'next/link'
import { connect } from 'react-redux'

import Counter from './counter'
import Clock from './clock'
import { Container } from './styled'

function Page ({ lastUpdate, light, linkTo, NavigateTo, title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
    </Container>
  )
}

export default connect(state => state)(Page)
