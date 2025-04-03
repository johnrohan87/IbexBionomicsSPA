import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Fade from 'react-reveal/Fade';
import { Article, Grid, Section, SectionHeading } from './newsFeed.style';

const NewsFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      saasAppDarkJson {
        POSTS {
          date
          excerpt {
            label
            link
          }
          id
          image {
            publicURL
          }
          title
        }
      }
    }
  `);

  const { saasAppDarkJson : POSTS } = data;

  return (
    <Section id="newsfeed">
      <Container width="1300px">
        <SectionHeading>
          <Text as="span" content="Updated Blog Post" />
          <Heading content="What our author post on Newsfeed" />
        </SectionHeading>
        <Grid>
          {POSTS?.POSTS?.map((post, index) => (
            <Fade key={index} up delay={(post.index + 1) * 100}>
              <Article>
                <Image src={post?.image?.publicURL} alt="post image" />
                <Text content={post?.date} />
                <Heading as="h4" content={post?.title} />
                <Link href={post?.excerpt?.link}>
                  {post?.excerpt?.label} <Icon icon={arrowRight} />
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
