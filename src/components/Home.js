import React from 'react'
import Card from './Card'

function Home() {
  return (
    <Card
      txtcolor="black"
      header="Bad Bank Landing Page"
      title="Welcome to Bad Bank"
      text="You can move around using the navigation bar."
      body={<img src="bank.png" className="img-fluid" alt="bank icon" />}
    />
  )
}

export default Home
