import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/dataSlice";
import "./index.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CoursesCard = () => {
  const dispatch = useDispatch();
  const dataCourses = useSelector((state) => state.courses);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div id="courses">
      <div className="container">
        <div className="cards">
          <h1>Our featured courses</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
          >
            {dataCourses?.data?.map((element) => {
              return (
                <SwiperSlide>
                  <div className="card">
                    <div className="img">
                      <img src={element.image} alt="" />
                    </div>
                    <div className="about-card">
                      <p className="name">{element.name}</p>
                      <p className="title">{element.title}</p>
                      <p className="description">{element.description}</p>
                      <div className="icons">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="price-count">
                        <div className="count">
                          <span >(4.5) </span> based on{" "}
                          {element.count}
                        </div>
                        <div className="price">
                          ${element.price}
                        </div>
                      </div>
                      <div className="btn">
                        <button>Find Out More</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
