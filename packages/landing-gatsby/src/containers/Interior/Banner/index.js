import Button from 'common/components/Button';
import GatsbyImage from 'common/components/GatsbyImage';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import Heading from 'common/components/Heading';
import Input from 'common/components/Input';
import Text from 'common/components/Text';
import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment, useEffect, useState } from 'react';
import { Icon } from 'react-icons-kit';
import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Fade from 'react-reveal/Fade';
import { CircleLoader } from '../interior.style';
import BannerWrapper, {
  ButtonGroup,
  CarouselArea, Container,
  ContentArea, FormWrapper, HighlightedText
} from './banner.style';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        bannerData {
          discount
          discountLabel
          title
          text
          carousel {
            id
            title
            thumb_url {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
            link
          }
        }
      }
    }
  `);

  const { discount, discountLabel, title, text, carousel } =
    data.interiorJson.bannerData;

  const glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 20,
    rewind: false,
    breakpoints: {
      1200: {
        perView: 2,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [state, setState] = useState({ email: '', valid: '' });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line

  const handleOnChange = (e) => {
    let value = '';
    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else {
      if (e.target.value.length > 0) {
        setState({ ...state, valid: 'invalid' });
      } else {
        setState({ ...state, valid: '' });
      }
    }
  };

  const handleSubscriptionForm = (e) => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({ email: '', valid: '' });
    }
  };

  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <Fade bottom delay={30}>
            <HighlightedText>
              <strong>{discount}</strong> {discountLabel}
            </HighlightedText>
            <Heading as="h1" content={title} />
            <Text content={text} />
            <FormWrapper onSubmit={handleSubscriptionForm}>
              <Input
                className={state.valid}
                type="email"
                placeholder="Enter email address"
                icon={<Icon icon={iosEmailOutline} />}
                iconPosition="left"
                required={true}
                onChange={handleOnChange}
                aria-label="email"
              />
              <ButtonGroup>
                <Button
                  type="submit"
                  colors="primaryWithBg"
                  title="FREE CONSULT"
                />
                <Button
                  title="EXPLORE MORE"
                  variant="textButton"
                  icon={<i className="flaticon-next" />}
                />
              </ButtonGroup>
            </FormWrapper>
          </Fade>
        </ContentArea>
        {/* End of content section */}

        <CarouselArea>
          {loading ? (
            <GlideCarousel
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {carousel.map((item) => (
                  <GlideSlide key={`carousel_key${item.id}`}>
                    <a href={item.link} className="item_wrapper">
                      <GatsbyImage
                        src={
                          (item.thumb_url !== null) | undefined
                            ? item.thumb_url.childImageSharp.gatsbyImageData
                            : {}
                        }
                        alt={item.title}
                        className="carousel_img"
                      />
                      <Heading as="h4" content={item.title} />
                    </a>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
