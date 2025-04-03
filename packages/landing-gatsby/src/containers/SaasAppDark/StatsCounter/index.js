import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Section, { Grid } from './statsCounter.style';

const StatsCounter = () => {
  const data = useStaticQuery(graphql`
    query {
      saasAppDarkJson {
        STATUS_COUNTER {
          blockTitle {
            subtitle
            text
            title
            button {
              label
              link
            }
          }
          posts {
            count
            symbol
            text
            title
          }
        }
      }
    }
  `);

  const { saasAppDarkJson : STATUS_COUNTER } = data;

  const {blockTitle, posts} = STATUS_COUNTER?.STATUS_COUNTER

  const { subtitle, title, text, button } = blockTitle;
  return (
    <Section>
      <Container width="1300px">
        <Grid>
          <Box className="blockTitle">
            <Text as="span" className="subtitle" content={subtitle} />
            <Heading as="h2" content={title} />
            <Text as="p" content={text} />
            <Link to={button.link} className="button">
              <span>
                {button.label}
                <Icon icon={androidArrowForward} size={16} />
              </span>
            </Link>
          </Box>
          <Box className="postsWrap">
            {posts?.map(({ count, text, title, symbol }, index) => (
              <Box className="post" key={`counter-post-key-${index}`}>
                <Text as="p" content={title} />
                <Box className="postCount">
                  <Heading as="h3" content={count} />
                  <Text as="span" content={symbol} />
                </Box>
                <Text as="p" content={text} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};

export default StatsCounter;
