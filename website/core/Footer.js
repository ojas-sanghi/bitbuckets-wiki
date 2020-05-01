/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language='') {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    const repoUrl = `https://github.com/turtlecoin/turtlecoin-docs`
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('design/SOLIDWORKS-Installation')}>
              Design
            </a>
            <a href={this.docUrl('software/Software-Getting-Started')}>
              Software
            </a>
            <a href={this.docUrl('fabrication/fab-placeholder')}>
              Fabrication
            </a>
            <a href={this.docUrl('electrical/electric-placeholder')}>
              Electrical
            </a>
          </div>
          <div>
            <h5>Links</h5>
            <a href="https://bitbuckets.org/">Website</a>
            <a href="https://github.com/bitbucketsfrc4183">GitHub</a>
            <a
              className="github-button"
              href="https://github.com/BitBucketsFRC4183/FRC2020_Infinite_Recharge/"
              data-icon="octicon-star"
              data-count-href={`${repoUrl}/stargazers`}
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <div>
          <section className="copyright">{this.props.config.copyright1}</section>
          <section className="copyright">{this.props.config.copyright2} <a href="https://opensource.org/licenses/MIT">MIT License</a></section>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
