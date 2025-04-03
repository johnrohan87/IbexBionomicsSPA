import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import icon13 from 'common/assets/image/webAppMinimal/icons/13.png';
import icon14 from 'common/assets/image/webAppMinimal/icons/14.png';
import Section, {
  SectionHeading,
  Profile,
  SlickCarousel,
  Blockquote,
} from './testimonial.style';

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query {
      webAppMinimalJson {
        testimonials {
          avatar {
            publicURL
          }
          designation
          id
          name
          quote
        }
      }
    }
  `);
  const testimonials = data.webAppMinimalJson.testimonials;

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    // fade: true,
    // autoplay: true,
    speed: 900,
    autoplaySpeed: 5000,
    // adaptiveHeight: true,
    customPaging: (i) => {
      return (
        <Profile>
          <figure>
            <Image
              src={testimonials[i].avatar.publicURL}
              alt={testimonials[i].name}
            />
          </figure>
          <div>
            <Heading as="h4" content={testimonials[i].name} />
            <Text content={testimonials[i].designation} />
          </div>
        </Profile>
      );
    },
    dotsClass: 'slick-dots slick-thumb',
  };
  return (
    <Section id="testimonial">
      <Container width="1400px">
        <SectionHeading>
          <Image src={icon13} alt="love icon" />
          <Heading content="What people say about our product" />
        </SectionHeading>
        <SlickCarousel {...settings}>
          {testimonials.map((testimonial) => (
            <Blockquote key={testimonial.id}>
              <Image src={icon14} alt="love icon" />
              {testimonial.quote}
            </Blockquote>
          ))}
        </SlickCarousel>
      </Container>
    </Section>
  );
};

export default Testimonial;
