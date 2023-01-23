import React, { useEffect, useState } from "react";
import "./index.scss";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { Helmet } from "react-helmet";
import { deleteData } from "../../redux/slice/dataSlice";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [course, setCourse] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/courses/${id}`)
      .then((response) => setCourse(response.data));
  }, []);

  const handleDeleteCourse = () => {
    dispatch(deleteData(id))
    navigate("/")
  };
  return (
    <div id="details-card">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{course.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <div className="container">
        <div className="details">
          <h1>{course.name}</h1>
          <div className="card">
            <div className="img">
              <img src={course.image} alt="" />
            </div>
            <div className="about">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="price">Price: ${course.price}</div>
              <div className="btn">
                <button onClick={() => handleDeleteCourse()}>
                  Delete Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
