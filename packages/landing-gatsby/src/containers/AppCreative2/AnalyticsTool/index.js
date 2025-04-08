import Button from 'common/components/Button';
import GatsbyImage from 'common/components/GatsbyImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/feather/check';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Fade from 'react-reveal/Fade';
import Section, { Content, Features, Figure, Grid } from './analytics.style';

const AnalyticsTool = () => {
	const data = useStaticQuery(graphql`
		query {
			appCreative2Json {
				analyticsTool {
					features
					slogan
					title
					desc
					button {
						label
						link
					}
				}
			}
			analytics: file(
				relativePath: { eq: "image/appCreativeTwo/analytics.png" }
			) {
				childImageSharp {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
						formats: [AUTO, WEBP]
					)
				}
			}
		}
	`);

	const { appCreative2Json: analyticsTool, analytics } = data;

	const { slogan, title, desc, features, button } = analyticsTool?.analyticsTool;

  return (
    <Section>
      <Container width="1400px">
        <Grid>
          <Figure>
          	<Fade up>
							<GatsbyImage
								src={
									(analytics !== null) | undefined
										? analytics?.childImageSharp?.gatsbyImageData
										: {}
								}
								objectFit="contain"
								alt="analytics image"
							/>
          	</Fade>
          </Figure>
          <Content>
						<Text className="subtitle" content={slogan} />
						<Heading content={title} />
						<Text className="description" content={desc} />
						{features?.length > 0 ?
              <Features>
                {features?.map((feat, i) => (
                  <li key={i}>
                    <Icon icon={check} size={22} />
                    {feat}
                  </li>
                ))}
              </Features>
              :
              ""
            }
						<Link to={button?.link} className="explore">
              <Button
                title={button?.label}
                icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}
              />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AnalyticsTool;
