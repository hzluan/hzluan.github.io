import React from 'react';
import ScrollToTop from 'react-router-scroll-top';
import './css/homepage.css';
import Homepage from './components/Home/Homepage';
import Gallery from './components/Gallery/Gallery';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LanguageContextProvider } from './components/Common/LanguageProvider';

export const imgBaseUrl = "https://github.com/hzluan/hzluan.github.io/image/";

axios.defaults.baseURL = "https://github.com/hzluan/hzluan.github.io/";
library.add(far, fab, fas);

function MyHomepage() {
  return (
    <Router>
      <ScrollToTop>
        <LanguageContextProvider>
          <Switch>
            <Route path="/gallery/:id">
              <Gallery />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </LanguageContextProvider>
      </ScrollToTop>
    </Router>
  );
}

export default MyHomepage;