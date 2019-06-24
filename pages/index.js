import React from 'react'
import { connect } from 'react-redux'

import { startClock, tickClock } from '../src/actions'
import Page from '../src/components/page'

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return <Page title='Index Page' />
  }
}

export default connect()(Index)
