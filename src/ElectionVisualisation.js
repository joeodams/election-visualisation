
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

import './ElectionVisualisation.css';

  
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
            <div class="row" style={{width: '100%', height:'100%'}}>
                <div class="colu-1">
                    <Plot
                        style={{width:'100%', height:'100%'}}
                        data={this.state.data}
                        useResizeHandler={true}
                        layout={this.state.layout}
                        frames={this.state.frames}
                        onSliderChange={(slider) => {this.setSelectedIndexFromSliderChange(slider); }}
                        config={{displayModeBar: false, responsive: false, autosizable: true}}
                    />
                </div>

                <div class="colu-2" >
                    <div class="caro-container" >
                        <Carousel style={{}} fade={true} interval={null} keyboard={false} wrap={true} controls={false} activeIndex={this.state.electionIndex} indicators={false}> 
                            <Carousel.Item> 
                                <img src={image1997} alt='' ></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image2001} alt='' ></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image2005} alt='' ></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image2010} alt='' ></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image2015} alt='' ></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image2017} alt='' ></img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image2019} alt='' ></img>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default ElectionVisualisation;
