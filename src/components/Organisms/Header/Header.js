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
                  <a activeclass="is-active" className="global-header__link" data-ember-action="" data-ember-action-823="823">
                    PRODUCTS
                    <span className="icon fdr-icon fdr-icon--triangle-down global-header__icon"></span>
                  </a>
                  <a activeclass="is-active" className="global-header__link visible--md-up" data-ember-action="" data-ember-action-825="825">
                    CUSTOMIZE
                    <span className="icon fdr-icon fdr-icon--triangle-down global-header__icon"></span>
                  </a>
                  <a href="https://shop.fender.com/en-US/dealers" className="global-header__link" data-ember-action="" data-ember-action-827="827">FIND A DEALER</a>
                  <a href="https://www.fender.com/play/pages/annual-plan-special-offer?utm_source=fender&amp;utm_medium=banner-owned&amp;utm_campaign=evergreen20190201&amp;utm_content=featured_nav" className="global-header__link" data-ember-action="" data-ember-action-829="829">SPECIAL OFFER</a>
                </nav>

                <nav className="global-header__nav global-header__nav--right">
                  <input type="text" placeholder="search" id="ember837" className="global-header__input input--cozy input--search visible--md-up capitalize ember-text-field ember-view" />
                  <a className="global-header__link popover popover--carrot popover--carrot-center popover--tinted no-relative-position visible--sm-down">
                    <span className="icon icon--large fdr-icon fdr-icon fdr-icon--search" data-ember-action="" data-ember-action-838="838"></span>
                    <div className="popover__menu popover__menu--full no-border-top no-margin-top">
                      <input type="text" placeholder="Search" id="ember839" className="input--search input--full no-border-bottom popover__input  ember-text-field ember-view" />
                    </div>
                  </a>
                  <a className="global-header__link no-margin-right" data-ember-action="" data-ember-action-840="840">
                    <div className="icon-badge">
                    </div>
                  </a>
                  <a href="https://shop.fender.com/en-US/cart" className="icon icon--large fdr-icon fdr-icon--cart global-header__icon" data-ember-action="" data-ember-action-841="841"></a>
                  <a className="global-header__link visible--md-down" data-ember-action="" data-ember-action-842="842">
                    <div className="icon-mobile icon-mobile--comfy">
                      <div className="icon-mobile__line"></div>
                      <div className="icon-mobile__line"></div>
                      <div className="icon-mobile__line"></div>
                    </div>
                  </a>
                </nav>
              </div>
            </div>
          </header>
        );
    }
}

Header = withRouter(Header);

export default Header;

