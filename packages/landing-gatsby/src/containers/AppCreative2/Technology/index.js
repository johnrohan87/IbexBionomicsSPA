import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Fade from 'react-reveal/Fade';
import Section, {
  Content, Figure, FigureWrapper, Grid, SectionHeading
} from './technology.style';

const WalletExperience = ({props}) => {
  const data = useStaticQuery(graphql`
    query {
      appCreative2Json {
        technologyCommunity {
          desc
          slogan
          thumb {
            publicURL
          }
          title
          button {
            label
            link
          }
        }
      }
    }
  `);

  const { appCreative2Json: technologyCommunity } = data;

  const technology = technologyCommunity?.technologyCommunity;

  return (
    <Section {...props}>
      <Container width="1400px">
        <Grid>
          <Content>
            <SectionHeading>
              <Text className="subtitle" content={technology?.slogan} />
              <Heading content={technology?.title} />
              <Text
                  className="description"
                  content={technology?.desc}
              />
              <Link to={technology?.button?.link} className="explore">
                <Button
                  title={technology?.button?.label}
                  icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}
                />
              </Link>
            </SectionHeading>
          </Content>
          <FigureWrapper>
            <Fade up>
              <Figure>
                <Image src={technology?.thumb?.publicURL} alt="analytics" />
              </Figure>
            </Fade>
          </FigureWrapper>
        </Grid>
      </Container>
    </Section>
  );
};

export default WalletExperience;
