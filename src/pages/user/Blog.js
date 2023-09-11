import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavPage from '../../components/NavPage';
import axios from "axios";
import { NavLink } from "react-router-dom";
const Blog = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/blogs').then((res)=>{setBlogs(res.data);console.log(res.data)}).catch(err=>console.log(err))
  },[]);

  return (
    <>
    <NavPage/>
    <div className="blog-container">
      <h1 className="custom-heading text-center mt-4">
        We love to share with others.
      </h1>
      <div className="row p-2">
        {blogs&&
        blogs.map((blog)=>(
          <div className="col-lg-4 col-md-6 p-4" key={blog.blog_ID}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center custom-heading mb-3"><h3>{blog.Title}</h3></Card.Title>
                <Card.Text className="text-justify">
                 {blog.Content}
                </Card.Text>
                <NavLink to={"/blogs/" + blog.blog_ID} className="btn custom-btn">Read More</NavLink>
              </Card.Body>
            </Card>
          </div>
        )
          
        )}

          {/* <div className="col-lg-4 col-md-6 p-4">
            <Card className="">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="custom-btn">Read More</Button>
              </Card.Body>
            </Card>
          </div> */}
          {/* <div className="col-lg-4  col-md-6  p-4">
            <Card className="">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="custom-btn">Read More</Button>
              </Card.Body>
            </Card>
          </div> */}
          {/* <div className="col-lg-4  col-md-6  p-4">
          <Card className="">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="custom-btn">Read More</Button>
              </Card.Body>
            </Card>
          </div> */}
          {/* <div className="col-lg-4  col-md-6  p-4">
          <Card className="">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="custom-btn">Read More</Button>
              </Card.Body>
            </Card>
          </div> */}
        </div>
    </div>
    </>
  );
};

export default Blog;
