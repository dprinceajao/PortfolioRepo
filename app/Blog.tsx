import React from 'react'
import Eight from './components/her/Eight'
import Sixth from './components/her/Sixth'
import Seventh from './components/her/Seventh'
import Third from './components/her/Third'
import Footer from './components/Footer'

type Props = {}

function Blog ({}: Props) {
  return (
    <div>
      <Eight />
      <Sixth />
      <Seventh />
      <Third />
      <Footer />
    </div>
  )
}

export default Blog
