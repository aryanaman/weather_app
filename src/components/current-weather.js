import React from 'react';
import './current-weather.scss';

class CurrentWeather extends React.Component {
    render() {
        let img;
        if(this.props.icon){
            const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
            img = <img className="current-weather_icon" src={url} alt={this.props.description}/>
        }
        
        
        return (
            <div className="current-weather">
                <div className="current-weather_content">
                    <div className="current-weather_text">
                        <p className="current-weather_temp">{this.props.currentTemperature}	°</p>
                        <p className="current-weather_description">{this.props.description}</p>
                    </div>
                    {img}
                    
                </div>
                <div>
                    <p className="current-weather_feels-like">
                        Feels like {this.props.feelsLike}°
                    </p>
                </div>
            </div>
        );
    }
}

export default CurrentWeather;

