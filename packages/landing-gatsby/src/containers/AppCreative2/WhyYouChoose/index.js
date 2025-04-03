import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Section, { Grid, Item, SectionHeading } from './whyYouChoose.style';

const WhyYouChoose = (props) => {
    const data = useStaticQuery(graphql`
    query {
			appCreative2Json {
				whyChooseUs {
					icon {
						publicURL
					}
					id
					link
					linkLabel
					text
					title
				}
			}
    }
  `);

  const { appCreative2Json: whyChooseUs } = data;

  return (
    <Section id="about" {...props}>
      <Container width="1400px">
        <SectionHeading>
          <Heading content="Why you choose this application" />
        </SectionHeading>
        <Grid>
					{whyChooseUs?.whyChooseUs?.map((howTo) => (
						<Item key={howTo?.id}>
							<figure>
								<Image src={howTo?.icon?.publicURL} alt="icon" />
							</figure>
							<Heading as="h4" content={howTo?.title} />
							<Text content={howTo?.text} />
							<Link to={howTo?.link}>
								{howTo?.linkLabel} <Icon icon={arrowRight} />
							</Link>
						</Item>
					))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhyYouChoose;
