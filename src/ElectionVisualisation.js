
import React from 'react';
import Plot from 'react-plotly.js';
import AgeBreakdown from './ageBreakdown.json';

import Carousel from 'react-bootstrap/Carousel';

import image1997 from './electionMaps/1997.png';
import image2001 from './electionMaps/2001.png';
import image2005 from './electionMaps/2005.png';
import image2010 from './electionMaps/2010.png';
import image2015 from './electionMaps/2015.png';
import image2017 from './electionMaps/2017.png';
import image2019 from './electionMaps/2019.png';


  
class ElectionVisualisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: AgeBreakdown['data'], layout: AgeBreakdown['layout'], frames: AgeBreakdown['frames'], config: {}, electionIndex: 3 };
    }

    setSelectedIndexFromSliderChange(slider) {
        this.setState({electionIndex: slider['step']['_index']})
    }
    
    render() {
        return (
            
            <table style={{ width:'100%' }}>
                <thead>
                    <tr>
                        <th></th>
                        <td style={{textAlign: 'left'}}>
                            <Plot
                                data={this.state.data}
                                layout={this.state.layout}
                                frames={this.state.frames}
                                onSliderChange={(slider) => {this.setSelectedIndexFromSliderChange(slider); }}
                                config={{displayModeBar: false, responsive: false}}
                            />
                        </td>
                        <td style={{textAlign: 'right'}}>
                            <div style={{width: '100%', height: '100%', padding: '1px'}}>
                                <Carousel fade={true} interval={null} keyboard={false} wrap={true} controls={false} activeIndex={this.state.electionIndex} indicators={false}> 
                                    <Carousel.Item> 
                                        <img src={image1997} alt='' width='600px' height='900px'></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={image2001} alt='' width='600px' height='900px'></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={image2005} alt='' width='600px' height='900px'></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={image2010} alt='' width='600px' height='900px'></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={image2015} alt='' width='600px' height='900px'></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={image2017} alt='' width='600px' height='900px'></img>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={image2019} alt='' width='600px' height='900px'></img>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </td>
                    </tr>
                </thead>
            </table>
        );
    }
}

export default ElectionVisualisation;
