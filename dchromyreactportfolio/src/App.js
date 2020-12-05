import React, { Component } from 'react';
import Main from './components/main';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"; 
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
            <Link to="/resume">Resume</Link>
              <Link to="/Mission">Mission</Link>
              <Link to="/Portfolio">Portfolio</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/Mission">Mission</Link>
              <Link to="/Portfolio">Portfolio</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;