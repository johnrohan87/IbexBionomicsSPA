import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import GatsbyImage from 'common/components/GatsbyImage';
import Text from 'common/components/Text';
import SectionWrapper, {
  ContentArea,
  TextWrapper,
  DonationProgressbar,
  BarArea,
  CurrentStatus,
  ShareArea,
  DonateButton,
  ShareList,
  Item,
  Illustration,
} from './donationGoal.style';

const DonationGoal = () => {
  const images = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/donation/fund-rising/1.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 806
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  return (
    <SectionWrapper id="donation-goal">
      <Container>
        <ContentArea>
          <TextWrapper>
            <Heading content="Be helping hand to recover COVID-19 patients" />
            <p className="desc">
              We are organizing a program on January 20, 2019 to help the
              homeless people. Our aim is to provide them a specific place to
              live.
              <Link to="#learn-more">
                Learn More <Icon icon={chevronRight} />
              </Link>
            </p>
            <DonationProgressbar>
              <BarArea>
                <CurrentStatus>
                  <strong>$1200</strong> of $10000 goal
                </CurrentStatus>
                <Text
                  className="last-donate-time"
                  content="Last donation 5m ago"
                />
              </BarArea>
              <Heading as="h5" content="Raised by 10 people in 1 month" />
            </DonationProgressbar>
            <ShareArea>
              <DonateButton href="#donate" offset={81}>
                Donate Now
              </DonateButton>
              <ShareList>
                <Item className="share-label">Share on:</Item>
                <Item>
                  <Link
                    to="#1"
                    target="_blank"
                    className="twitter"
                    aria-label="social share link"
                  >
                    <Icon icon={twitter} size={22} />
                  </Link>
                </Item>
                <Item>
                  <Link
                    to="#1"
                    target="_blank"
                    className="facebook"
                    aria-label="social share link"
                  >
                    <Icon icon={facebookSquare} size={22} />
                  </Link>
                </Item>
              </ShareList>
            </ShareArea>
          </TextWrapper>
        </ContentArea>
      </Container>
      <Illustration>
        <GatsbyImage
          src={
            (images.illustration !== null) | undefined
              ? images.illustration.childImageSharp.gatsbyImageData
              : {}
          }
          alt="Covid 19 Map"
        />
      </Illustration>
    </SectionWrapper>
  );
};

export default DonationGoal;
