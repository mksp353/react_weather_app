import React from "react";
import axios from "axios";
import './Weather2.css';
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: "",weather: null};
        this.fetchWeather = this.fetchWeather.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=2b31d1de832a1cbdb097dd8fa17164cf`);
            console.log("works");
            this.setState({ weather: response.data });
        } catch (error) {
            console.log(error);
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchWeather();
    }

    render() {
        const { city, weather } = this.state;
        return (
            <div>
                <div className="form_wrap">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="area" placeholder="enter your city" value={city} onChange={(e) => this.setState({ city: e.target.value })} />
                        <button type="submit">check weather info</button>
                    </form>
                </div>
                <div className="show_weather">
                    {weather && (
                        <div className="add-div">
                            <h1>Temperature: {weather.main.temp}&deg;C</h1>
                            <h3>{weather.name}</h3>
                            <h2>{weather.weather[0].description}</h2>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Weather;
