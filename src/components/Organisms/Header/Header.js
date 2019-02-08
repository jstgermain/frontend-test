import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
    state = {
    };

    render() {
        const currentLocation = this.props.location.pathname.replace('/', '');

        return (
          <header className="global-header">
            <div className="global-header__content">
              <div className="global-header__above-nav">
                <div id="ember791" className="ember-view">
                  <div className="skinny-nav">
                    <div>
                      <ul>
                        <li>
                          <a href="https://www.fender.com" data-ember-action="" data-ember-action-792="792" className="active">FENDER.COM</a>
                        </li>
                        <li>
                          <a href="https://shop.fender.com" data-ember-action="" data-ember-action-793="793">SHOP</a>
                        </li>
                        <li>
                          <a href="https://www.fender.com/play" data-ember-action="" data-ember-action-794="794">PLAY</a>
                        </li>
                        <li>
                          <a href="https://www.fender.com/online-guitar-tuner/" data-ember-action="" data-ember-action-795="795">TUNE</a>
                        </li>
                        <li>
                          <a href="https://www.fender.com/tone" data-ember-action="" data-ember-action-796="796">TONE</a>
                        </li>
                      </ul>
                    </div>
                    <div className="skinny-nav__connect">
                      <a href="https://www.fender.com/connect/sign-in?ref=https://www.fender.com/" data-auto-id="header-sign-in" className="global-header__link global-header__link--action truncate visible--md-up">sign in</a>
                      <a className="global-header__link visible--sm-down" data-ember-action="" data-ember-action-809="809">
                        <span className="icon fdr-icon fdr-icon--user-circle global-header__icon"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="global-header__promo">
                  <div className="icon-text icon-text--heavy">
                    <div className="icon-text__icon icon fdr-icon fdr-icon--play-pick"></div>
                    <div className="icon-text__text">
                      <div id="ember820" className="ember-view">
                        <p><a href="https://www.fender.com/play/pages/annual-plan-special-offer?utm_source=fender&amp;utm_medium=banner-owned&amp;utm_campaign=evergreen20190201&amp;utm_term=start_trial&amp;utm_content=pencil"><span>Fender Play</span></a><span className="dn di-ns ml3">SPECIAL OFFER: 2 weeks free, plus 10% off gear with Fender Play.</span><a href="https://www.fender.com/play/pages/annual-plan-special-offer?utm_source=fender&amp;utm_medium=banner-owned&amp;utm_campaign=evergreen20190201&amp;utm_term=start_trial&amp;utm_content=pencil"><span className="ml3">START YOUR FREE TRIAL</span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="global-header__menu">
                <div className="global-header-logo">
                  <a className="global-header-logo__link" data-ember-action="" data-ember-action-821="821">
                    <div className="logo icon fdr-icon fdr-icon--logo"></div>
                  </a>
                </div>
                <nav roll="navigation" className="global-header__nav visible--lg-up">
                </nav>
              </div>
            </div>
          </header>
        );
    }
}

Header = withRouter(Header);

export default Header;
