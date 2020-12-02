import './App.css';
import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"; 

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
      <h1> hello world </h1>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="Portfolio">Portfolio</a>
                <a href="Projects">Projects</a>
                <a href="Contact">Contact Me </a>
                <a href="Resume">Resume</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
               <a href="Portfolio">Portfolio</a>
                <a href="Mission">My Mission</a>
                <a href="Contact">Contact Me </a>
                <a href="Resume">Resume</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  );
}

export default App;
