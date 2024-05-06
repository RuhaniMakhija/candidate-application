import React from 'react'
import JobSearchPage from './components/JobSearchPage/JobSearchPage'
import {Provider} from "react-redux"
import store from './utils/store'

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <JobSearchPage/>
    </div>
    </Provider>
  )
}

export default App
