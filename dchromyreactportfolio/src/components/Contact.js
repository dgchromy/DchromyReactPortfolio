import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Nav from "./Nav"

class Contact extends Component {
  render() {
    return(
        <div>
            <Nav/>
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Donald Chromy</h2>
            
             <script src= "dchromyreactportfolio/public/images/toshAndI.jpg" 
              alt=""
              style={{height: '250px'}}
              ></script>

            
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (425) 457-6992
                  </ListItemContent>
                </ListItem>

                
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    Dgchromy@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
      </div>
    )
  }
}

export default Contact;
