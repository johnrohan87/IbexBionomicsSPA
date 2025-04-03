import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { useStaticQuery, graphql } from 'gatsby';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import GatsbyImage from 'common/components/GatsbyImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';

import { Section, SectionHeading, Grid, Article } from './newsFeed.style';

const NewsFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      saasAppCreativeJson {
        posts {
          id
          title
          date
          excerpt {
            label
            link
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  const posts = data.saasAppCreativeJson.posts;
  return (
    <Section id="newsfeed">
      <Container width="1360px">
        <SectionHeading>
          <Text content="Updated Blog Post" />
          <Heading content="What our author post on Newsfeed" />
        </SectionHeading>
        <Grid>
          {posts.map((post) => (
            <Fade key={post.id} up delay={post.id * 100}>
              <Article>
                <GatsbyImage
                  src={
                    (post.image !== null) | undefined
                      ? post.image.childImageSharp.gatsbyImageData
                      : {}
                  }
                  alt={post.title}
                />
                <Text content={post.date} />
                <Heading as="h4" content={post.title} />
                <Link href={post.excerpt.link}>
                  {post.excerpt.label} <Icon icon={arrowRight} />
                </Link>
              </Article>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default NewsFeed;
