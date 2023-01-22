import React from "react";
import "./index.scss";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { courseSchema } from "../../schema";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/slice/dataSlice";

const AddCourses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, errors, touched, values, resetForm } =
    useFormik({
      initialValues: {
        image: "",
        name: "",
        title: "",
        description: "",
        count: 120,
        price: "",
      },
      validationSchema: courseSchema,
      onSubmit: (values) => {
        dispatch(postData(values));
        resetForm();
        navigate("/");
      },
    });

  return (
    <div id="add-course">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Course</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <div className="container">
        <div className="add-course">
          <h1>Add New Course</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  id="image"
                  name="image"
                  type="text"
                  onChange={handleChange}
                  value={values.image}
                  placeholder="Image"
                />
              </div>
              {errors.image && touched.image && (
                <p style={{ color: "darkred" }}>{errors.image}</p>
              )}
              <div className="input">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Course Name"
                />
              </div>
              {errors.name && touched.name && (
                <p style={{ color: "darkred" }}>{errors.name}</p>
              )}
              <div className="input">
                <input
                  id="title"
                  name="title"
                  type="text"
                  onChange={handleChange}
                  value={values.title}
                  placeholder="Course Title"
                />
              </div>
              {errors.title && touched.title && (
                <p style={{ color: "darkred" }}>{errors.title}</p>
              )}
              <div className="input">
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="Description"
                />
              </div>
              {errors.description && touched.description && (
                <p style={{ color: "darkred" }}>{errors.description}</p>
              )}
              <div className="input">
                <input
                  id="price"
                  name="price"
                  type="number"
                  onChange={handleChange}
                  value={values.price}
                  placeholder="Price"
                />
              </div>
              {errors.price && touched.price && (
                <p style={{ color: "darkred" }}>{errors.price}</p>
              )}
              <div className="btn">
                <button type="submit">Add Course</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddCourses;
