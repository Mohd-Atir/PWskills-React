import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useBlogContext } from "../context/BlogContext";

function EditBlogModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [article, setArticle] = useState("");

  const { editBlog, blogs } = useBlogContext();

  const handleUpdateBlog = (e) => {
    e.preventDefault();
    if (url == "" && title == "" && description == "" && article == "") return;
    blogs.push(editBlog({ url, id: Date.now(), title, description, article }));
    setArticle("");
    setTitle("");
    setDescription("");
    setUrl("");
  };

  return (
    <>
      {/* <button className="btn btn-primary col-6" onClick={handleShow}>Edit</button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={url}
                placeholder="Enter Blog Post URL:"
                autoFocus
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter Blog Title:"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter Blog Description:"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={article}
                onChange={(e) => setArticle(e.target.value)}
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

export default EditBlogModal;
