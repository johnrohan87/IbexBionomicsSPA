import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Icon } from "react-icons-kit";
import { androidDone } from "react-icons-kit/ionicons/androidDone";

import Container from "common/components/UI/ContainerTwo";
import Image from "common/components/Image";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import FeatureBlock from "common/components/FeatureBlock";
import List from "common/components/List";

import SectionWrapper, { SectionHeader, ServiceWrapper } from "./service.style";

const Services = () => {
	const Data = useStaticQuery(graphql`
		query {
			agencyFormalJson {
				services {
					id
					title
					description
					features
					icon {
						publicURL
					}
				}
			}
		}
	`);

	const data = Data.agencyFormalJson;

	return (
		<SectionWrapper id="service">
			<Container>
				<Fade up delay={100}>
					<SectionHeader>
						<Zoom>
							<Heading content="Ideal solutions for you" />
							<Text content="Go beyond ultimate features" />
						</Zoom>
					</SectionHeader>
				</Fade>
				<ServiceWrapper>
					{data.services.map((item, index) => (
						<Fade up delay={130 * item.id} key={`service-key-${item.id}`}>
							<FeatureBlock
								key={`post_key-${index}`}
								id={`post_id-${item.id}`}
								className="service__item"
								icon={
									<Image
										src={item.icon.publicURL}
										alt={`Blog Image ${item.id}`}
										objectFit="cover"
									/>
								}
								iconPosition="left"
								title={<Heading as="h4" content={item.title} />}
								description={<Text content={item.description} />}
								listItems={item.features.map((feat, index) => (
									<List
										key={`list-feature-${index}`}
										className="list-points"
										icon={
											<Icon
												className="tick-icon"
												size="20px"
												icon={androidDone}
											/>
										}
										text={<Text className="list-text" content={feat} />}
									/>
								))}
							/>
						</Fade>
					))}
				</ServiceWrapper>
			</Container>
		</SectionWrapper>
	);
};

export default Services;
