import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Tab, TabList, TabPanel } from 'react-tabs';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Section, { SectionHeading, ReactTabs } from './dashboard.style';

const Dashboard = () => {
  const data = useStaticQuery(graphql`
    query {
      webAppCreativeJson {
        dashboard {
          sectionTitle
          sectionDesc
          tabs {
            id
            title
            content {
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
      }
    }
  `);
  return (
    <Section id="features">
      <Container width="1400px">
        <SectionHeading>
          <Heading content={data.webAppCreativeJson.dashboard.sectionTitle} />
          <Text content={data.webAppCreativeJson.dashboard.sectionDesc} />
        </SectionHeading>
        <ReactTabs>
          <nav>
            <TabList>
              {data.webAppCreativeJson.dashboard.tabs.map((tab) => (
                <Tab key={tab.id}>{tab.title}</Tab>
              ))}
            </TabList>
          </nav>

          {data.webAppCreativeJson.dashboard.tabs.map((tab) => (
            <TabPanel key={tab.id}>
              <Fade up>
                <figure>
                  <GatsbyImage
                    src={
                      (tab.content.image !== null) | undefined
                        ? tab.content.image.childImageSharp.gatsbyImageData
                        : {}
                    }
                    alt={tab.title}
                  />
                </figure>
              </Fade>
            </TabPanel>
          ))}
        </ReactTabs>
      </Container>
    </Section>
  );
};

export default Dashboard;
