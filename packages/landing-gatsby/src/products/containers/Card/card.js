import React from "react";
import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  border: 1px solid #d1fae5;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;
