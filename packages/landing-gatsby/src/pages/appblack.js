import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { DrawerProvider } from 'common/contexts/DrawerContext'
import Sticky from 'react-stickynode'
import { appBlackTheme } from 'common/theme/appBlack'
import { ResetCSS } from 'common/assets/css/style'
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/AppBlack/appBlack.style'

import Navbar from '../containers/AppBlack/Navbar'
// import ScrollableSticky from '../containers/AppBlack/ScrollableSticky'
import Banner from '../containers/AppBlack/Banner'
import Service from '../containers/AppBlack/Service'
import ProductDelivery from '../containers/AppBlack/ProductDelivery'
import QualityFeatures from '../containers/AppBlack/QualityFeatures'
import Clients from '../containers/AppBlack/Clients'
import Testimonials from '../containers/AppBlack/Testimonials'
import PricingPolicy from '../containers/AppBlack/PricingPolicy'
import CustomerSupport from '../containers/AppBlack/CustomerSupport'
import Faq from '../containers/AppBlack/Faq'
import Subscription from '../containers/AppBlack/Subscription'
import Footer from '../containers/AppBlack/Footer'
import Seo from '../components/seo'

const AppBlack = () => {
  return (
    <ThemeProvider theme={appBlackTheme}>
      <Fragment>
        <Seo title='App Black | A react Gatsby landing page' />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass='sticky-nav-active'>
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          {/* <ScrollableSticky></ScrollableSticky> */}
          <Banner />
          <Service />
          <ProductDelivery />
          <QualityFeatures />
          <Clients />
          <Testimonials />
          <PricingPolicy />
          <CustomerSupport />
          <Faq />
          <Subscription />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  )
}
export default AppBlack
