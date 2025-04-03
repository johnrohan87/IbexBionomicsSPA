import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/appCreative2';
import Seo from 'components/seo';
import AnalyticsTool from 'containers/AppCreative2/AnalyticsTool';
import { ContentWrapper, GlobalStyle } from 'containers/AppCreative2/appCreative2.style';
import Banner from 'containers/AppCreative2/Banner';
import Cta from 'containers/AppCreative2/CTA';
import EverNeed from 'containers/AppCreative2/EverNeed';
import Faq from 'containers/AppCreative2/FAQ';
import Footer from 'containers/AppCreative2/Footer';
import Navbar from 'containers/AppCreative2/Navbar';
import PricingPolicy from 'containers/AppCreative2/PricingPolicy';
import Technology from 'containers/AppCreative2/Technology';
import WalletExperience from 'containers/AppCreative2/WalletExperience';
import WhyYouChoose from 'containers/AppCreative2/WhyYouChoose';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

const AppCreativeTwo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="App Creative Two | A react gatsby landing page" />

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <WhyYouChoose />
          <AnalyticsTool />
          <EverNeed />
          <WalletExperience />
          <Technology />
          <div className='app_creative_combined_section_wrapper'>
            <PricingPolicy className="pricing_policy" />
            <div className='app_creative_dark_section app_creative_section' style={{backgroundColor: `${theme?.colors?.dark}`}}>
              <Faq className="faq_section" />
              <Cta className="cta_section" />
            </div>
          </div>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default AppCreativeTwo;
