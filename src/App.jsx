import React from 'react'
import Navigator from './components/Navigator'
import Home from './components/Home'
import ColoredLine from './components/ColoredLine'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import DesignedBy from './components/DesignedBy'
import Load from './components/LoadingAnimation/Load'


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
      <ColoredLine color={"#18f54b"}/>
                  {/* This component is not responsive!! */}
      <ColoredLine color={"#18f54b"}/>
      <Contact />
      <ColoredLine color={"#18f54b"}/>
      <Load />
      <DesignedBy />
    </>
  )
}

export default App