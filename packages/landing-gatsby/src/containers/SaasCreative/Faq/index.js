import Collapse, { Panel } from 'rc-collapse';
import { useStaticQuery, graphql } from 'gatsby';
import React, { useState, Fragment } from 'react';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import Section, { SectionHeading, AccordionWrapper } from './faq.style';

const Faq = () => {
  const [activeKey, setActiveKey] = useState(1);

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  };

  const data = useStaticQuery(graphql`
    query {
      saasCreativeJson {
        faqs {
          id
          title
          description
        }
      }
    }
  `);
  const faqs = data.saasCreativeJson.faqs;

  return (
    <Section id="faq">
      <Container className="container">
        <SectionHeading>
          <Heading content="Frequently Ask Question" />
        </SectionHeading>
        <AccordionWrapper>
          <Collapse
            collapsible={undefined}
            accordion={true}
            activeKey={activeKey}
            onChange={onChange}
          >
            {faqs?.map((faq) => (
              <Panel
                key={faq.id}
                showArrow={false}
                header={
                  <Fragment>
                    <Heading as="h4" content={faq.title} />
                    <span className="icon">
                      <Icon icon={minus} size={20} className="minus" />
                      <Icon icon={plus} size={20} className="plus" />
                    </span>
                  </Fragment>
                }
              >
                {faq.description}
              </Panel>
            ))}
          </Collapse>
        </AccordionWrapper>
      </Container>
    </Section>
  );
};

export default Faq;
