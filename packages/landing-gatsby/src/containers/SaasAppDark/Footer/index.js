import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { ic_place } from 'react-icons-kit/md/ic_place';
import {
  AboutUs, ContactInfo, FooterWidget, Grid, InfoItem, Section
} from './footer.style';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      saasAppDarkJson {
        FOOTER_WIDGET {
          about {
            logo {
              publicURL
            }
            text
          }
          contactInfo {
            address
            email
            openingTime
            phone
            title
          }
          widgets {
            id
            list {
              id
              link
              title
            }
            title
          }
        }
      }
    }
  `);

  const { saasAppDarkJson : FOOTER_WIDGET } = data;

  const {about, contactInfo, widgets} = FOOTER_WIDGET?.FOOTER_WIDGET

  return (
    <Section>
      <Container width="1300px">
        <Grid>
          <AboutUs>
            <Image src={about?.logo?.publicURL} alt="Web App Creative" />
            <Text content={about?.text} />
          </AboutUs>
          {widgets?.map((item, index) => (
            <FooterWidget key={index}>
              <h4>{item.title}</h4>
              <ul>
                {item?.list?.map((item, index) => (
                  <li className="widgetListItem" key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
          <ContactInfo>
            <Heading as="h4" content={contactInfo?.title} />
            <InfoItem>
              <Icon icon={ic_place} size={24} />
              <Text content={contactInfo?.address} />
            </InfoItem>
            <InfoItem>
              <Icon icon={ic_phone} size={26} className="phone-icon" />
              <div>
                <Text
                  className="phone-number"
                  content={contactInfo?.phone}
                />
                <Text content={contactInfo?.openingTime} />
              </div>
            </InfoItem>
            <InfoItem>
              <Icon icon={paperPlane} size={22} />
              <Text content={contactInfo?.email} />
            </InfoItem>
          </ContactInfo>
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;
