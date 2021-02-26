import React from 'react';
import propTypes from 'prop-types';
// style
import './index.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

const categoryList = [
  'microsoft',
  'apple',
  'tesla',
  'spacex',
  'netflix',
  'playstation',
  'youtube',
  'gaming',
  'startup',
  'facebook',
  'network',
  'amazon',
  'ai',
  'android',
];

const Category = ({ handleClick }) => {
  return (
    <section className="category-list">
      <div className="container">
        <Swiper
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          scrollbar={{ draggable: true }}
          slidesPerView={'auto'}
          autoHeight={true}
          grabCursor={true}
        >
          {categoryList.map((category, idx) => {
            return (
              <SwiperSlide
                key={idx}
                style={{
                  width: 'fit-content',
                  height: '40px',
                }}
              >
                <span
                  className="category-item"
                  data-category={category}
                  onClick={(e) => handleClick(e)}
                >
                  <span className="category-name" data-category={category}>
                    {category}
                  </span>
                </span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

Category.propTypes = {
  handleClick: propTypes.func,
};

export default Category;
