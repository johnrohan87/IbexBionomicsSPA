import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Section, {
  Content, FeatureGroup,
  FeatureItem, Figure, FigureWrapper, Grid, SectionHeading
} from './experience.style';


const WalletExperience = ({props}) => {
  const data = useStaticQuery(graphql`
    query {
      appCreative2Json {
        walletExperience {
          desc
          features {
            content
            icon {
              publicURL
            }
            id
            title
          }
          slogan
          thumb {
            publicURL
          }
          title
        }
      }
    }
  `);

  const { appCreative2Json: walletExperience } = data;

  const wallet = walletExperience?.walletExperience;

  return (
    <Section {...props}>
      <Container width="1400px">
        <Grid>
          <FigureWrapper>
            <Fade up>
              <Figure>
                <Image src={wallet?.thumb?.publicURL} alt="analytics" />
              </Figure>
            </Fade>
          </FigureWrapper>
          <Content>
            <SectionHeading>
              <Text className="subtitle" content={wallet?.slogan} />
              <Heading content={wallet?.title} />
              <Text
                className="description"
                content={wallet?.desc}
              />
            </SectionHeading>
            {wallet?.features?.length ?
            <FeatureGroup>
              {wallet?.features?.map((feature, index) => {
                return (
                  <FeatureItem key={index}>
                    <figure>
                      <Image src={feature?.icon?.publicURL} alt="clock icon" />
                    </figure>
                    <div>
                      <Heading as="h4" content={feature?.title} />
                      <Text
                          className="description"
                          content={feature?.content}
                      />
                    </div>
                  </FeatureItem>
                )
              })}
            </FeatureGroup>
            :
            ""
            }
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default WalletExperience;
