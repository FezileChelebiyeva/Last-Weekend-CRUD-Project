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

const ExpertsCard = () => {
  const dispatch = useDispatch();
  const dataExperts = useSelector((state) => state.courses);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div id="card-experts">
      <div className="container">
        <div className="experts">
          <h1>Community experts</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
          >
            {dataExperts.data?.map((element) => {
              return (
                <SwiperSlide key={element._id}>
                  <div className="card">
                    <div className="img">
                      <img src={element.expertImg} alt="" />
                    </div>
                    <div className="info">
                      <h4>{element.expertName}</h4>
                      <p>{element.expertTitle}</p>
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

export default ExpertsCard;
