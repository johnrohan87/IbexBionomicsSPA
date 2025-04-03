import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
	FooterBottom,
	FooterNav, SocialLinks
} from './footer.style';

const Footer_Bottom = (props) => {
	const data = useStaticQuery(graphql`
  query {
		appCreative2Json {
			footer {
				copyright
				nav {
					link
					id
					title
				}
				socialLinks {
					icon {
						publicURL
					}
					id
					label
					link
				}
			}
		}
  }
  `);

  const { appCreative2Json: footer } = data;

  const items = footer?.footer;

  const { copyright, nav, socialLinks } = items || {}

  return (
		<Container {...props}>
			<FooterBottom>
				<Text content={copyright} />
				<FooterNav>
					{nav?.map((item, index) => (
						<li key={index}>
							<Link href={item?.link}>{item.title}</Link>
						</li>
					))}
				</FooterNav>
				<SocialLinks>
					<span>Social:</span>
					{socialLinks?.length ?
					<ul>
						{socialLinks?.map((item, index) => (
							<li key={index}>
								<Link href={item?.link}>
									<img src={item?.icon?.publicURL} alt={item?.label} />
								</Link>
							</li>
						))}
					</ul>
					:
					""
					}
				</SocialLinks>
			</FooterBottom>
		</Container>
  );
};

export default Footer_Bottom;
