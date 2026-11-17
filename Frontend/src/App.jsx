import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import FeedPosts from './pages/FeedPosts'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/createPost' element={<CreatePost />} />
        <Route path='/Feed' element={<FeedPosts />} /> 
      </Routes>
    </Router>
  
  )
}

export default App