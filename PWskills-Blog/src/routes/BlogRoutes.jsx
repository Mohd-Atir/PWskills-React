import {Route, Routes} from 'react-router-dom'
import React from "react";
import BlogItems from '../components/BlogItems';
import ReadBlogPage from '../components/ReadBlogPage';

function BlogRoutes() {
  return (
    <Routes>
        <Route path='/' element={<BlogItems/>}/>
        <Route path='blog/:title/:id' element={<ReadBlogPage/>}/>
    </Routes>
  )
}

export default BlogRoutes;