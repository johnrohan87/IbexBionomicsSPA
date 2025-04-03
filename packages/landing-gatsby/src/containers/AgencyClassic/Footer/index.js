import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Link from 'common/components/Link';
import {
	Section,
	FooterTop,
	FooterWidget,
	FooterBottom,
	Copyright,
	FooterNav,
	ContactInfo,
	InfoItem,
	FooterSocial,
} from './footer.style';
// import { FOOTER, FOOTER_NAV, CONTACT_INFO } from 'common/data/AgencyClassic';
import Icon from 'react-icons-kit';
import { ic_place } from 'react-icons-kit/md/ic_place';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import Logo from 'common/assets/image/agencyClassic/logo.png';
import FB from 'common/assets/image/agencyClassic/fb.png';
import TW from 'common/assets/image/agencyClassic/twitter.png';
import PIN from 'common/assets/image/agencyClassic/pinterest.png';
import Input from 'common/components/Input';
import Button from 'common/components/Button';
import envelope from 'common/assets/image/agencyClassic/envelope.svg';

const Footer = () => {
	const Data = useStaticQuery(graphql`
		query {
			agencyClassicJson {
				footer {
					id
					title
					list {
						id
						title
						link
					}
				}
				contact_info {
					title
					address
					phone
					openingTime
					email
				}
				footer_nav {
					id
					title
					link
				}
				footer_widget {
					title
					menuItems {
						url
						text
					}
				}
			}
		}
	`);

	return (
		<Section>
			<Container>
				<Fade up delay={100}>
					<FooterSocial>
						<Box className="branding">
							<img src={Logo} alt="Logo" className="logo" />
							<Text content="We design products that delight and inspire people, and grow your business." />
							<div className="socials">
								<Link href="https://web.facebook.com/redqinc/?_rdc=1&_rdr">
									<Image src={FB} alt="Logo" />
								</Link>
								<Link href="https://twitter.com/_redq/">
									<Image src={TW} alt="Logo" />
								</Link>
								<Link href="https://dribbble.com/redqinc">
									<Image src={PIN} alt="Logo" />
								</Link>
							</div>
						</Box>
						<Box className="newsletter">
							<Text content="Subscribe to the Newsletter" />
							<div className="input">
								<Input
									inputType="email"
									placeholder="Your work email"
									iconPosition="left"
									aria-label="email"
									icon={<img src={envelope} alt="envelope" />}
								/>
								<Button
									title="Subscribe Now"
									className="primary_hover"
									type="submit"
								/>
							</div>
							<div className="checkbox_wrapper">
								<input type="checkbox" className="styled-checkbox" />
								<label className="checkbox">
									Don’t provide any promotional message
								</label>
							</div>
						</Box>
					</FooterSocial>
				</Fade>
				<FooterTop>
					{Data.agencyClassicJson.footer.map((item) => (
						<Fade key={item.id} up delay={100 * item.id}>
							<FooterWidget key={item.id}>
								<h4>{item.title}</h4>
								<ul>
									{item.list.map((item) => (
										<li className="widgetListItem" key={item.id}>
											<Link href={item.link}>{item.title}</Link>
										</li>
									))}
								</ul>
							</FooterWidget>
						</Fade>
					))}

					<Fade up delay={100 * 5}>
						<ContactInfo>
							{Data.agencyClassicJson.contact_info.map((info, index) => (
								<FooterWidget key={index}>
									<h4>{info.title}</h4>
									<InfoItem>
										<Icon icon={ic_place} size={24} />
										<Text content={info.address} />
									</InfoItem>
									<InfoItem>
										<Icon icon={ic_phone} size={26} className="phone-icon" />
										<div>
											<Text className="phone-number" content={info.phone} />
											<Text content={info.openingTime} />
										</div>
									</InfoItem>
									<InfoItem>
										<Icon icon={paperPlane} size={22} />
										<Text content={info.email} />
									</InfoItem>
								</FooterWidget>
							))}
						</ContactInfo>
					</Fade>
				</FooterTop>
				<FooterBottom>
					<Fade up delay={100}>
						<Copyright>
							Copyright &copy; {new Date().getFullYear()} by{' '}
							<span>Redq, Inc</span>
						</Copyright>
						<FooterNav>
							{Data.agencyClassicJson.footer_nav.map((item, index) => (
								<li key={index}>
									<a href={item.link}>{item.title}</a>
								</li>
							))}
						</FooterNav>
					</Fade>
				</FooterBottom>
			</Container>
		</Section>
	);
};

export default Footer;
