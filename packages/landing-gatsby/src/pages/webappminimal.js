import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/webAppMinimal';
import Seo from 'components/seo';
import AnalyticsTool from 'containers/WebAppMinimal/AnalyticsTool';
import Banner from 'containers/WebAppMinimal/Banner';
import CallToAction from 'containers/WebAppMinimal/CallToAction';
import Clients from 'containers/WebAppMinimal/Clients';
import Dashboard from 'containers/WebAppMinimal/Dashboard';
import Faq from 'containers/WebAppMinimal/Faq';
import HowItWorks from 'containers/WebAppMinimal/HowItWorks';
import Navbar from 'containers/WebAppMinimal/Navbar';
import NewsFeed from 'containers/WebAppMinimal/NewsFeed';
import Pricing from 'containers/WebAppMinimal/Pricing';
import Testimonials from 'containers/WebAppMinimal/Testimonials';
import {
	ContentWrapper,
	GlobalStyle,
} from 'containers/WebAppMinimal/webAppMinimal.style';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

const WebAppMinimal = () => {
	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<Seo title="Web App Minimal | A react next landing page" />
				<Modal />
				<ResetCSS />
				<GlobalStyle />

				<ContentWrapper>
					<Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
						<DrawerProvider>
							<Navbar />
						</DrawerProvider>
					</Sticky>
					<Banner />
					<Clients />
					<HowItWorks />
					<AnalyticsTool />
					<Dashboard />
					<Testimonials />
					<Pricing />
					<NewsFeed />
					<Faq />
					<CallToAction />
				</ContentWrapper>
			</Fragment>
		</ThemeProvider>
	);
};
export default WebAppMinimal;
