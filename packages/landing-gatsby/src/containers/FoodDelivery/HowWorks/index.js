import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import HowWorksWrapper from './howWorks.style';
const HowWorks = () => {
  const Data = useStaticQuery(graphql`
    query {
      foodDeliveryJson {
        HOW_WORKS_DATA {
          title
          posts {
            icon {
              publicURL
            }
            title
            text
            link {
              path
              label
            }
          }
        }
      }
    }
  `);
  const { title, posts } = Data.foodDeliveryJson.HOW_WORKS_DATA;
  return (
    <HowWorksWrapper>
      <Container>
        <Heading as="h2" content={title} />
        <Box className="postWrap">
          {posts.map(({ icon, title, text, link }, index) => (
            <Box className="post" key={`how-works-post-key-${index}`}>
              <Fade bottom cascade>
                <Box className="imageBox">
                  <Image src={icon.publicURL} alt={title} />
                </Box>
                <Heading as="h3" content={title} />
                <Text as="p" content={text} />
                <Link className="button" to={link.path}>
                  {link.label} <Icon size={18} icon={arrowRight} />
                </Link>
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </HowWorksWrapper>
  );
};

export default HowWorks;
