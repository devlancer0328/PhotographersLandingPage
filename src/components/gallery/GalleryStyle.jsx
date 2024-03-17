import styled from "styled-components";

export const GalleryContainer = styled.div`
  margin: 0 auto;
  height: auto;
  padding: 92px 16vw 92px 16vw;
  @media (max-width: 760px) {
    padding: 48px 0;
    h1 {
      padding-left: 32px;
    }
  }
`;

export const SwiperGalleryContainer = styled.div`
  height: auto;
  max-height: 600px;
  .swiper {
    height: auto;
    max-height: 600px;
    .swiper-button-next {
      color: rgb(240, 142, 53);
      background: #ffffff;
      padding: 16px;
      height: 64px;
      width: 40px;
      right: 0;
    }
    .swiper-button-prev {
      color: rgb(240, 142, 53);
      background: #ffffff;
      padding: 16px;
      height: 64px;
      width: 40px;
      left: 0;
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
  @media (max-width: 760px) {
    .swiper {
      .swiper-button-next {
        width: 32px;
        height: 48px;
        &::after {
          font-size: 28px;
        }
      }
      .swiper-button-prev {
        width: 32px;
        height: 48px;
        &::after {
          font-size: 28px;
        }
      }
    }
  }
`;
