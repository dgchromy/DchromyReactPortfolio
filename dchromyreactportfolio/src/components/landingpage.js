import React, { Components } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Components {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
        

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS |  Mongo | Express | React | Node | Hooks </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/donny-chromy-100437114/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/dgchromy" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* instagram */}
          <a href="https://www.instagram.com/donnychromy/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-instagram" aria-hidden="true" />
          </a>
            {/* Facebook */}
          <a href="https://www.facebook.com/donny.chromy" rel="noopener noreferrer" target="_blank">
            <i className="fa-facebook-square" aria-hidden="true" />
          </a>
  
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
