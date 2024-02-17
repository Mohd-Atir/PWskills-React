import React from "react";
import { useBlogContext } from "../context/BlogContext";
import { useParams } from "react-router-dom";

function ReadBlogPage() {
  const { blogs } = useBlogContext();
  const {id} = useParams()
  const selectedBlog = blogs.find((blog) => blog.id === parseInt(id))
  if(!selectedBlog) return <div>Blog not found!</div>
  return (
    <div className="container">
        <div className="mt-3 p-3 rounded blog-container" key={selectedBlog.id}>
          <div className="card border-0 blog-bg">
            <div className="row g-0">
              <div className="col-md-4 p-3 img-shadow">
                <img
                  src={selectedBlog.url}
                  className="img-fluid card-img readblogimg"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-light">
                  <h5 className="card-title">{selectedBlog.title}</h5>
                  <p className="card-text">
                    {selectedBlog.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <article className="text-dark mt-3">
            {selectedBlog.article}
          </article>
        </div>
        </div>
  );
}

export default ReadBlogPage;
