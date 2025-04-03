import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { ic_place } from 'react-icons-kit/md/ic_place';
import {
	AboutUs, ContactInfo, FooterWidget, Grid, InfoItem
} from './footer.style';

const FooterTop = (props) => {
	const data = useStaticQuery(graphql`
  query {
		appCreative2Json {
				footerTop {
					widgets {
						id
						list {
							id
							link
							title
						}
						title
					}
					contactInfo {
						address
						email
						openingTime
						phone
						title
					}
					about {
						logo {
							publicURL
						}
						text
					}
				}
			}
    }
  `);

  const { appCreative2Json: footerTop } = data;

  const items = footerTop?.footerTop;

    const { about, widgets, contactInfo } = items || {};
    return (
			<Container {...props}>
				<Grid>
					<AboutUs>
						<Link to="/">
							<Image src={about?.logo?.publicURL} alt="Web App Creative" />
						</Link>
						<Text content={about?.text} />
					</AboutUs>
					{widgets?.length ? widgets?.map((item) => (
						<FooterWidget key={item?.id}>
							<h4>{item?.title}</h4>
							{item?.list?.length ?
								<ul>
										{item?.list?.map((item) => (
										<li className="widgetListItem" key={item.id}>
												<Link to={item?.link}>{item?.title}</Link>
										</li>
										))}
								</ul>
							:
							""
							}
						</FooterWidget>
					))
					:
					""
					}
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
    );
};

export default FooterTop;
