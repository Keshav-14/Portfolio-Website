import React from 'react'
import Navigator from './components/Navigator'
import Home from './components/Home'
import ColoredLine from './components/ColoredLine'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'

const App = () => {
  return (
    <>
      <Navigator />
      <Home />
      <ColoredLine color={"#18f54b"}/>
      <About />
      <ColoredLine color={"#18f54b"}/>
      <Education />
      <ColoredLine color={"#18f54b"}/>
      <Skills />
    </>
  )
}

export default App