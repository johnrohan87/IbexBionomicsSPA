import styled from "styled-components";
import { Link } from "gatsby";

// Apply box-sizing to all elements (ideal if you add this globally elsewhere too)
const GlobalStyleFix = styled.div`
  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  padding: 3rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 0.75rem;
  }

  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #14532d;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectorSection = styled.div`
  margin-bottom: 4rem;
`;

export const SectorTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #15803d;
  color: #15803d;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 2rem;
  justify-items: center;

  ${({ isSingle }) =>
    isSingle &&
    `
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  `}

  @media (max-width: 768px) and (orientation: portrait) {
    grid-template-columns: 1fr;
    padding: 0 0.75rem;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  @media (orientation: landscape) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
    justify-content: center;
  }
`;

export const GridCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    min-height: 420px;
    margin: 0 auto;
  }

  @media (orientation: landscape) and (max-width: 1024px) {
    min-height: auto;
    max-width: 420px;
    margin: 0 auto;
  }
`;
GridCard.displayName = 'GridCard';

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
  color: #14532d;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
`;

export const ProductDesc = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;