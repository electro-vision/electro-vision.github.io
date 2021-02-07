import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './common/scroll-to-top';
import ErrorBoundary from './common/error-boundary';

import Application from './components/application';
import Home from './components/home';
import AboutUs from './components/about-us';
import OurServices from './components/our-services';
import OurProducts from './components/our-products';
import Capability from './components/capability';
import ContactUs from './components/contact-us';
import NotFound404 from './components/404';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Application />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/our-products" element={<OurProducts />} />
            <Route path="/capability" element={<Capability />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/404" element={<NotFound404 />} />
            <Route path="/*" element={<NotFound404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;