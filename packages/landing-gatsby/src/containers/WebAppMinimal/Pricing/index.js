import patternBg from 'common/assets/image/webAppMinimal/pricing-pattern-bg.png';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import PriceCard from './price-card';
import {
  Grid, Section,
  SectionHeading,
  SwitcherWrapper
} from './pricing.style';


const Pricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  const data = useStaticQuery(graphql`
    query {
      webAppMinimalJson {
        pricing {
          id
          price {
            monthly
            annual
          }
          currencySymbol
          isActive
          title
          desc
          icon {
            publicURL
          }
          button {
            label
            link
          }
          details {
            label
            link
          }
        }
      }
    }
  `);

  return (
    <section id="pricing" {...props}>
      <Section
        bgImage={patternBg}
        bgImageAlt="pattern"
        strength={200}
      >
        <Container width="1400px">
          <SectionHeading>
            <Heading content="Explore our exciting pricing" />
          </SectionHeading>
          <SwitcherWrapper>
            <span className={isMonthly ? 'active label' : 'label'}>Monthly</span>
            <button className="switcher" onClick={handleToggle}>
              <span
                className={`switcher-button ${isMonthly ? 'left' : 'right'}`}
              />
            </button>
            <span className={!isMonthly ? 'active label' : 'label'}>Yearly</span>
          </SwitcherWrapper>
          <Grid>
            {data.webAppMinimalJson.pricing.map((priceTable) => (
              <Fade
                key={priceTable.id}
                delay={priceTable.id * 100}
                bottom
                appear
                duration={600}
                spy={isMonthly}
              >
                <PriceCard isMonthly={isMonthly} priceTable={priceTable} />
              </Fade>
            ))}
          </Grid>
        </Container>
      </Section>
    </section>
  );
};

export default Pricing;
