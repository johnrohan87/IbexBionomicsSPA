import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FeatureArea = styled.section`
  position: relative;
  padding: 90px 0 365px;
  background-image: url('/IbexBionomics/HPIbexBannerBG.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* 🎯 Parallax Effect */
  font-family: 'Poppins', sans-serif;

  @media (max-width: 1600px) {
    padding-top: 60px;
  }

  @media (max-width: 768px) {
    padding-bottom: 275px;
  }

  @media (max-width: 375px) {
    padding-top: 40px;
    padding-bottom: 255px;
  }

  .blockTitle {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 60px;
    padding: 30px 25px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
    color: ${themeGet('colors.white')};

    h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 1.3;
      letter-spacing: -1px;
      margin-bottom: 15px;
      color: ${themeGet('colors.white')};
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);

      @media (max-width: 768px) {
        font-size: 28px;
      }
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 1.8;
      color: ${themeGet('colors.white')};
      opacity: 0.9;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .postWrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
  }

  .post {
    flex: 0 0 calc(20% - 20px);
    max-width: calc(20% - 20px);
    min-height: 220px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: ${fadeInUp} 0.8s ease forwards;
    opacity: 0;

    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }

    @media (max-width: 1024px) {
      flex: 0 0 calc(45% - 20px);
      max-width: calc(45% - 20px);
    }

    @media (max-width: 576px) {
      flex: 1 1 100%;
      max-width: 100%;
    }

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1);
    }

    h3 {
      font-weight: 500;
      font-size: 17px;
      color: ${themeGet('colors.white')};
      margin-top: 20px;
      line-height: 1.4;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }
  }

  .feature-image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    img {
      max-height: 80px;
      max-width: 100%;
      object-fit: contain;
      display: block;
    }
  }
`;

export default FeatureArea;