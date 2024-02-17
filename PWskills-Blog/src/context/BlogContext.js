import {createContext, useContext} from 'react'

const BlogContext = createContext({
    blogs : [],
    addBlog: (blog) => {},
    deleteBlog: (id) => {},
    editBlog: (id, blog) => {}
})

export const useBlogContext = () => {
    return useContext(BlogContext)
}

export const ContextProvider = BlogContext.Provider