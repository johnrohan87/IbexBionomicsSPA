import Heading from 'common/components/Heading';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Section, { Content } from './cta.style';

const CTA = (props) => {
  const data = useStaticQuery(graphql`
    query {
      appCreative2Json {
        callToAction {
          button {
            label
            link
          }
          content
          info
          title
        }
      }
    }
  `);

  const { appCreative2Json: callToAction } = data;

  const items = callToAction?.callToAction;

  return (
    <Section {...props} id="cta">
      <Container width="1400px">
        <Content className='cat_content_wrapper'>
          <Heading content={items?.title} />

          <Text content={items?.content} />

          <Link href={items?.button?.link} className='call_to_action_link'>
            {items?.button?.label}
          </Link>

          <span className='call_to_action_info'>{items?.info}</span>
        </Content>
      </Container>
    </Section>
  );
};

export default CTA;
