import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Toolbar from './components/Toolbar'
import Blog from './screens/Blog'
import ContactUs from './screens/ContactUs'
import Homepage from './screens/Homepage'

const App = () => {
  return (
    <BrowserRouter>
      <Toolbar />
      <Switch>
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
