import { GalleryContainer, SwiperGalleryContainer } from "./GalleryStyle";
import SwiperGallery from "./SwiperGallery";

const Gallery = () => {
  return (
    <div id="gallery">
      <GalleryContainer>
        <h1>Galeria</h1>
        <SwiperGalleryContainer>
          <SwiperGallery />
        </SwiperGalleryContainer>
      </GalleryContainer>
    </div>
  );
};

export default Gallery;
