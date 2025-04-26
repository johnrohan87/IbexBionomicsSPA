import styled from "styled-components";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  padding: 3rem 1.5rem;
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  /* Center if only 1 card */
  & > div:only-child {
    justify-self: center;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
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
  font-size: 1.5rem;
  font-weight: bold;
  color: #166534;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
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
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;