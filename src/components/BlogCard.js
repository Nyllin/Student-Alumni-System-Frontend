
import Card from "react-bootstrap/Card";
import NavPage from "./NavPage";
import '../styles/BlogCard.css'
import { useNavigate, useParams } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import axios from "axios";
const BlogCard = () => {
  const navigate = useNavigate();
  const [blog,setBlog] = useState([]);
  const {id} = useParams(); 
  useEffect(()=>{
    axios.get(`http://localhost:8000/blogs/${id}`)
    .then((res) => {
      setBlog(res.data);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  },[])
  return (
    <>
    <NavPage/>
    <div className="blogcard-container">
      {blog&&blog.map((b)=>(
         <Card className="m-5" key={b.blog_ID}>
         <Card.Header className="text-center"><h1 className="custom-heading">{b.Title}</h1></Card.Header>
         <Card.Body className="m-3">
           <Card.Text>
            {b.Content}
           </Card.Text>
           <Button onClick={() => navigate(-1)} className="custom-btn">close</Button>
         </Card.Body>
       </Card>
      ))}
     
      </div>
    </>
  );
};

export default BlogCard;
