import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useBlogContext } from "../context/BlogContext";

function ModalBox() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [file, setFile] = useState(null);
  
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [article, setArticle] = useState("");

  const { addBlog, blogs } = useBlogContext();

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (!url || !title || !description || !article) return;
    blogs.push(addBlog({ url, id: Date.now(), title, description, article }));
    setArticle("");
    setTitle("");
    setDescription("");
    setUrl("");
  };

  // Handling input type="file"
  // const handleAddBlog = (e) => {
  //   e.preventDefault();
  //   if (!file || !title || !description || !article) return;
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const url = reader.result;
  //     addBlog({ url, id: Date.now(), title, description, article });
  //     setArticle("");
  //     setTitle("");
  //     setDescription("");
  //     setFile(null);
  //   };
  //   reader.readAsDataURL(file);
  // };
  

  return (
    <>
      <button className="nav-link" onClick={handleShow}>
        <h1>+</h1>
      </button>

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
                // type="file"
                // placeholder="Choose image"
                // onChange={(e) => setFile(e.target.files[0])}
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
          <Button className="col" variant="primary" onClick={handleAddBlog}>
            Add Blog
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBox;
