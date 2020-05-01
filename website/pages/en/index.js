/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_docs.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="https://bitbuckets.org">Official Website</Button>
            <Button href="https://github.com/bitbucketsfrc4183">GitHub Organization</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {

  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const QuickNav = () => (
      <Block layout="fourColumn">
        {[
          {
            content: "What's 'clearance'?",
            image: `${baseUrl}img/undraw_design.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl("design/SOLIDWORKS-Installation")}>Design</a>`,
          },
          {
            content: 'Hacker code hacker code',
            image: `${baseUrl}img/undraw_software.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl("software/Software-Getting-Started")}>Software</a>`,
          },
          {
            content: 'Watch out: lasers',
            image: `${baseUrl}img/undraw_fab.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl("fabrication/fab-placeholder")}>Fabrication</a>`,
          },
          {
            content: 'BZZZZZ',
            image: `${baseUrl}img/undraw_circuit.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl("electrical/electric-placeholder")}>Electrical</a>`,
          }
        ]}
      </Block>
    );
    
    const About1 = () => (
      <Block background="light">
        {[
          {
            content: 'We compete in robotics competitions and other technical challenges',
            image: `${baseUrl}img/undraw_robot.svg`,
            imageAlign: 'right',
            title: 'Bit Buckets Robotics is a community-based middle and high-school STEM team.',
          },
        ]}
      </Block>
    );

    const About2 = () => (
      <Block>
        {[
          {
            content: 'Including leadership, teamwork, and time-management. Students also help with fundraising and competition logistics',
            image: `${baseUrl}img/undraw_teamwork.svg`,
            imageAlign: 'left',
            title: "In addition to hands-on engineering, students experience all aspects of running a team",
          },
        ]}
      </Block>
    );

    const About3 = () => (
      <Block background="light">
        {[
          {
            content:'Students attend elite colleges and universities such as Harvard, MIT, Stanford, Carnegie Mellon, and UC Berkeley',
            image: `${baseUrl}img/undraw_university.svg`,
            imageAlign: 'right',
            title: `Our students get to work with U of A professors and top engineers from around the world, including Raytheon and the military`,
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <QuickNav />
          <About1 />
          <About2 />
          <About3 />
        </div>
      </div>
    );
  }
}

module.exports = Index;