import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../context/BlogContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function BlogItems() {
  const { blogs, deleteBlog, editBlog } = useBlogContext();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editedBlog, setEditedBlog] = useState([]);

  const handleEditBlog = (id) => {
    setEditedBlog(
      blogs.find((prevBlog) => (prevBlog.id === id ? prevBlog : ""))
    );
    handleShow();
  };

  const handleUpdateBlog = () => {
    if (
      editedBlog.url &&
      editedBlog.title &&
      editedBlog.description &&
      editedBlog.article
    ) {
      editBlog(editedBlog.id, editedBlog);
      handleClose();
    }
  };

  return (
    <>
      {blogs.map((blog) => (
        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
          key={blog.id}
        >
          <div className="card mt-3">
            <img
              src={blog.url}
              className="card-img-top"
              alt="poster"
              style={{ height: "230px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {blog.title.substring(0, 15) + "..."}
              </h5>
              <p className="card-text">
                {blog.description.substring(0, 20) + "..."}
              </p>
              <Link
                to={`blog/${blog.title}/${blog.id}`}
                className="btn btn-primary col-12"
              >
                Read more
              </Link>
              <div className="mt-2 d-flex gap-1 justify-content-center">
                <button
                  className="btn btn-primary col-6"
                  onClick={() => handleEditBlog(blog.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-primary col-6"
                  onClick={() => {
                    const confirm = window.confirm("Are you sure to delete?");
                    if (confirm) {
                      deleteBlog(blog.id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Edit blog post modal box */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={editedBlog.url}
                placeholder="Enter Blog Post URL:"
                autoFocus
                onChange={(e) =>
                  setEditedBlog({ ...editedBlog, url: e.target.value })
                }
                // handling input type="file"
                // type="file"
                // placeholder="Choose image"
                // onChange={(e) =>
                //   setEditedBlog({
                //     ...editedBlog,
                //     url: URL.createObjectURL(e.target.files[0]),
                //   })
                // }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter Blog Title:"
                value={editedBlog.title}
                onChange={(e) =>
                  setEditedBlog({ ...editedBlog, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter Blog Description:"
                value={editedBlog.description}
                onChange={(e) =>
                  setEditedBlog({ ...editedBlog, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                placeholder="write..."
                as="textarea"
                rows={6}
                value={editedBlog.article}
                onChange={(e) =>
                  setEditedBlog({ ...editedBlog, article: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="col" variant="primary" onClick={handleUpdateBlog}>
            Update Blog
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BlogItems;
