import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';

import SectionWrapper, {
  ClientWrapper,
  ImageSlider,
  ImageSlide,
} from './clients.style';


const Experiences = () => {
  const Data = useStaticQuery(graphql`
    query {
      agencyClassicJson {
        clients {
          publicURL
        }
      }
    }
  `);

  return (
    <SectionWrapper id="experience">
      <Container width="1400px">
        <ClientWrapper>
          <div className="client__text">
            <Text as="span" content={'We have successfully worked with'} />
          </div>
          <ImageSlider>
            <ImageSlide>
              {Data.agencyClassicJson.clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href="#"
                  logoSrc={item.publicURL}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {Data.agencyClassicJson.clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href="#"
                  logoSrc={item.publicURL}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
