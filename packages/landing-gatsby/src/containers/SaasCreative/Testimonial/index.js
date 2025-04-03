import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import icon13 from 'common/assets/image/saasCreative/icons/13.png';
import icon14 from 'common/assets/image/saasCreative/icons/14.png';
import Section, {
  SectionHeading,
  Profile,
  AsCarousel,
  AsCarouselNav,
  Blockquote,
} from './testimonial.style';

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // autoplay: true,
  speed: 900,
  autoplaySpeed: 5000,
};

const Testimonial = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const data = useStaticQuery(graphql`
    query {
      saasCreativeJson {
        testimonials {
          id
          avatar {
            publicURL
          }
          name
          designation
          quote
        }
      }
    }
  `);
  const testimonials = data.saasCreativeJson.testimonials;
  return (
    <Section id="testimonial">
      <Container width="1400px">
        <SectionHeading>
          <Image src={icon13} alt="love icon" />
          <Heading content="What people say about our product" />
        </SectionHeading>
        <AsCarousel
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          {...settings}
        >
          {testimonials.map((testimonial) => (
            <Blockquote key={testimonial.id}>
              <Image src={icon14} alt="love icon" />
              {testimonial.quote}
            </Blockquote>
          ))}
        </AsCarousel>
        <AsCarouselNav
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {testimonials.map((testimonial) => (
            <Profile key={testimonial.id} className="author-profile">
              <figure>
                <Image
                  src={testimonial.avatar.publicURL}
                  alt={testimonial.name}
                />
              </figure>
              <div>
                <Heading as="h4" content={testimonial.name} />
                <Text content={testimonial.designation} />
              </div>
            </Profile>
          ))}
        </AsCarouselNav>
      </Container>
    </Section>
  );
};

export default Testimonial;
