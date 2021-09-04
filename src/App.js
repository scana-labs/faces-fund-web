import { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import Collection from './Collection';
import FAQs from './FAQs';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import Mint from './Mint';
import Roadmap from './Roadmap';
import Team from './Team';
import gif from './assets/gif40_16.gif';

import './App.css';

const App = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash]); // do this on route change
  
  return (
    <div className="content min-h-screen relative overflow-hidden">
      <main id="main">
        <Header />
        <Switch>
          <Route path="/mint">
            <Mint />
          </Route>
          <Route path="/">
            <div className="flex items-center pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden mb-20 md:h-screen">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:py-24">
                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                            <span className="block">The Faces Fund</span>
                        </h1>
                        <div>
                            <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            The Faces Fund is a collection of 3,000 art pieces generated from a variety of hand-drawn traits built with the goal of community philanthropy.
                            <br />
                            <br />
                            Token holders vote on how the charity fund is donated each week. Those who participate are eligible to win ETH.
                            <br />
                            <br />
                            </p>
                            <div className="text-2xl">
                            Coming Soon: International Day of Charity September 05, 2021
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative flex justify-items-center items-center">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                            <img id="token-gif" src={gif} alt="Token GIF"/>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <Features />

            <Team />

            <Collection />

            <Roadmap />

            <FAQs />

            <Footer />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;