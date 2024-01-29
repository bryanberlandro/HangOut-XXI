/* eslint-disable react/prop-types */
export function SwiperSlide(props) {
    const {
      children,
      ...rest
    } = props;
  
    return (
      <swiper-slide {...rest}>
        {children}
      </swiper-slide>
    );
  }