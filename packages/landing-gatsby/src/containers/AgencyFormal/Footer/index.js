import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";

import Container from "common/components/UI/ContainerTwo";
import Link from "common/components/Link";
import Image from "common/components/Image";
import {
	Section,
	FooterTop,
	FooterWidget,
	FooterBottom,
	Copyright,
	FooterNav,
} from "./footer.style";
import logo from "common/assets/image/agencyFormal/logo.png";

const Footer = () => {
	const Data = useStaticQuery(graphql`
		query {
			agencyFormalJson {
				footer {
					id
					list {
						id
						link
						title
					}
					title
				}
				footerNav {
					id
					link
					title
				}
			}
		}
	`);

	const data = Data.agencyFormalJson;

	return (
		<Section id="about">
			<Container>
				<FooterTop>
					{data.footer.map((item) => (
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
				</FooterTop>
				<FooterBottom>
					<Copyright>
						<Image src={logo} alt="Agency Formal" />
						Copyright &copy; {new Date().getFullYear()} by Redq, Inc
					</Copyright>
					<FooterNav>
						{data.footerNav.map((item) => (
							<li key={item.id}>{item.title}</li>
						))}
					</FooterNav>
				</FooterBottom>
			</Container>
		</Section>
	);
};

export default Footer;
