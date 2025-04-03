import Heading from 'common/components/Heading';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from './carousel';
import TestimonialsArea, { SectionHeading } from './testimonials.style';

const Testimonial = (props) => {
  const data = useStaticQuery(graphql`
    query {
			appCreative2Json {
        testimonialData {
          title
          quoteIcon {
            publicURL
          }
          posts {
            button {
              label
              link
            }
            designation
            image {
              publicURL
            }
            logo {
              publicURL
            }
            rating
            name
            text
          }
        }
      }
    }
  `);

  const { appCreative2Json: testimonialData } = data;

  const testimonials = testimonialData?.testimonialData;

  return (
    <div {...props}>
        <SectionHeading>
            <Heading content={testimonials?.title} />
        </SectionHeading>

        {testimonials?.posts?.length > 0 ?
        <Fade up>
          <TestimonialsArea id="testimonials">
            <Carousel data={testimonials?.posts} quoteIcon={testimonials?.quoteIcon} />
          </TestimonialsArea>
        </Fade>
        :
        ""
        }
    </div>
  );
};

export default Testimonial;
