import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import {
  Route,
  NavLink,
} from "react-router-dom";



import ScatterChart from "./scatter & bubble charts/Scatter Chart";



class Template extends Component {
  
  render() {    
    return (
		<div>
			  
			  <>		  
				
							<NavLink to="/scatter-chart">Scatter Chart</NavLink>
							
							
						
						
							<Container>
								<div className="content">
									
									
									<Route path="/scatter-chart" component={ScatterChart}/>
								
									
						
									
								</div>
							</Container>
										
							
			  </>	
			</div>
    );
  }
}

export default Template;