import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Section, {
  AuthorInfo, Item, ReactSlick, SectionHeading
} from './testimonials.style';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      saasAppDarkJson {
        TESTIMONIALS {
          author
          designation
          id
          quote
          logo {
            publicURL
          }
        }
      }
    }
  `);

  const { saasAppDarkJson : TESTIMONIALS } = data;

  return (
    <Section id="testimonials">
      <Container width="1300px">
        <SectionHeading>
          <Text as="span" content="Testimonials" />
          <Heading content="What our clients say about us" />
        </SectionHeading>
        <ReactSlick {...settings}>
          {TESTIMONIALS?.TESTIMONIALS.map((testimonial, index) => (
            <Item key={index}>
              <div>
                <figure>
                  <Image src={testimonial.logo?.publicURL} alt="logo" />
                </figure>
                <Text as="blockquote" content={testimonial.quote} />
              </div>
              <AuthorInfo>
                <Heading as="h4" content={testimonial.author} />
                <Text content={testimonial.designation} />
              </AuthorInfo>
            </Item>
          ))}
        </ReactSlick>
      </Container>
    </Section>
  );
};

export default Testimonials;
