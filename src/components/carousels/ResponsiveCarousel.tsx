import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { items } from "../../../public/Items.json";
import styles from "../../styles/components/ResponsiveCarousel.module.css";

export default function ResponsiveCarousel() {
  const { swiper } = items;
  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        // autoPlay={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper}
      >
        {swiper.map((item: any) => (
          <div key={item.id} className={styles.swipItem}>
            <div className={styles.imgBox}>
              <img src={item.imageUrl} alt="slides" />
            </div>
            <div className={styles.detail}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
