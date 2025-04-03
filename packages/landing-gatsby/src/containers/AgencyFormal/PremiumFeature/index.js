import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import GatsbyImage from 'common/components/GatsbyImage';
import List from 'common/components/List';
import Link from 'common/components/Link';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ButtonGroup,
} from './premiumFeature.style';

const PremiumFeature = () => {
  const Data = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/agencyFormal/services/paint.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      agencyFormalJson {
        premiumFeature {
          id
          title
        }
      }
    }
  `);

  const isTab = useMediaQuery({ minWidth: 571, maxWidth: 768 });

  const data = Data.agencyFormalJson;

  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Illustration>
            <Fade up>
              <GatsbyImage
                src={
                  (Data.illustration !== null) | undefined
                    ? Data.illustration.childImageSharp.gatsbyImageData
                    : {}
                }
                objectFit="cover"
                alt="Paint"
              />
            </Fade>
          </Illustration>

          <Content>
            <Heading
              as="h2"
              content="Meet premium feature that will make you wow"
            />
            <Text content="It built to handle large volumes, high speeds, and the poor reliability endemic to crypto markets. Our solution handles connectivity to venues, executes trades." />
            <ButtonGroup>
              {data.premiumFeature.map((item) => (
                <List
                  className="button-item"
                  key={item.id}
                  text={<Text className="btn" content={item.title} />}
                  type="button"
                  icon={
                    <Icon
                      className="tick"
                      icon={ic_check_circle}
                      style={{ color: '#4200FF' }}
                      size={isTab ? 20 : 15}
                    />
                  }
                />
              ))}
            </ButtonGroup>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default PremiumFeature;
