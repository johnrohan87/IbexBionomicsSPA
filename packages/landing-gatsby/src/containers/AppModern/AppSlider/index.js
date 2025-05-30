import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import FeatureBlock from 'common/components/FeatureBlock';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import SectionWrapper, { CarouseWrapper, TextWrapper } from './appSlider.style';

const AppSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        appSlider {
          title
          description
          features {
            id
            icon {
              publicURL
            }

            title
            description
          }
          carousel {
            id
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `);
  const { title, description, features, carousel } =
    data.appModernJson.appSlider;

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };

  return (
    <SectionWrapper>
      <Container>
        <CarouseWrapper>
          <GlideCarousel
            bullets={true}
            controls={false}
            numberOfBullets={3}
            options={glideOptions}
            carouselSelector="appFeatureSlider"
          >
            <Fragment>
              {carousel.map((item) => (
                <GlideSlide key={`feature-side--key${item.id}`}>
                  <GatsbyImage
                    src={
                      (item.image !== null) | undefined
                        ? item.image.childImageSharp.gatsbyImageData
                        : {}
                    }
                    alt={item.title}
                  />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </CarouseWrapper>
        <TextWrapper>
          <Heading content={title} />
          <Text content={description} />
          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={<img src={item.icon.publicURL} alt={item.title} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AppSlider;
