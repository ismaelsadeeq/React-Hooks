import React from 'react'
import { NameConsumer } from './userContext'

function CompnentG() {
  return (
    <NameConsumer>
      {nam=>{
        return <div>Hello {nam}</div>
      }}
    </NameConsumer>
  )
}

export default CompnentG
