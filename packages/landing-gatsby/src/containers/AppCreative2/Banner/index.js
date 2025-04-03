import arrowIcon from 'common/assets/image/appCreativeTwo/icons/arrow.png';
import Box from 'common/components/Box';
import GatsbyImage from 'common/components/GatsbyImage';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Section, {
	BannerContent, BannerContentWrapper, BannerText, Figure,
	HighlightedText
} from './banner.style';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
			appCreative2Json {
				bannerData {
					button {
						id
						link
						thumb {
							publicURL
						}
						title
					}
					news
					newsLabel
					text
					title
				}
			}
			bannerCover: file(
        relativePath: { eq: "image/appCreativeTwo/banner_image.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

	const { appCreative2Json: bannerData, bannerCover } = data;

	const { title, text, button, news, newsLabel } = bannerData?.bannerData;

	return (
		<Section id="home">
			<Container width="1400px">
				<BannerContentWrapper>
					<BannerContent>
						<HighlightedText>
							<strong>{news}</strong>
							{newsLabel}
							<Image src={arrowIcon} alt="Login now" />
						</HighlightedText>
						<Heading
							className="animate__animated animate__fadeInUp banner-title"
							content={title}
						/>
						<BannerText>
							<div className="animate__animated animate__fadeInUp">
									{text}
							</div>
						</BannerText>
						{button.length > 0 ?
						<Box as="div" className="button-group">
							{button?.map((item, index) => {
								return (
									<Link to={item?.link} key={index} target="_blank">
										<Image src={item?.thumb?.publicURL} alt={item?.title} />
									</Link>
								)
							})}
						</Box>
						: ""}
					</BannerContent>
					<Figure className="animate__animated animate__fadeInUp animate__fast">
						<GatsbyImage
							src={
								(bannerCover !== null) | undefined
									? bannerCover?.childImageSharp?.gatsbyImageData
									: {}
							}
							objectFit="contain"
							alt="banner image"
						/>
					</Figure>
				</BannerContentWrapper>
			</Container>
		</Section>
	);
};

export default Banner;
