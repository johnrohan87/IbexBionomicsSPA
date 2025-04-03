import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown';
import Container from 'common/components/UI/Container';
import Button from 'common/components/Button';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { Content } from './cta.style';

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Heading content="Start making business with our software" />
          <Text content="Best free time tracking software. It's a simple time tracker and time sheet app that lets you and your team track work hours" />
          <Button
            title="Download For MacOS"
            icon={<Icon icon={androidArrowDropdown} size={20} />}
          />
          <span>
            <Link href="#">2,500+ Upvote on ProductHunt</Link>
          </span>
        </Content>
      </Container>
    </Section>
  );
};

export default CallToAction;
