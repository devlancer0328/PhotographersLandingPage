import styled from "styled-components";

export const GalleryContainer = styled.div`
  margin: 0 auto;
  height: auto;
  padding: 92px 16vw 92px 16vw;
  @media (max-width: 760px) {
    padding: 48px 32px;
  }
`;

export const SwiperGalleryContainer = styled.div`
  height: auto;
  max-height: 600px;
  .swiper {
    height: auto;
    max-height: 600px;
    .swiper-button-prev,
    .swiper-button-next {
      color: rgb(240, 142, 53);
    }
    .swiper-pagination {
      .swiper-pagination-bullet-active {
        background: rgb(240, 142, 53);
      }
    }
    .swiper-wrapper {
      .swiper-slide {
        max-height: 600px;
        img {
          object-fit: cover;
          height: 600px;
          width: 100%;
        }
      }
    }
  }
`;
