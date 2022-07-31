declare module 'react-open-weather' {
    import { FC } from 'react';

    type lang = "en" | "de" | "es";
    type options = {
        /**
         * your api key from the openweather, weatherbit or visual crossing websites
         */
        key: string;
        /**
         * latitude of the location
         */
        lat: string;
        /**
         * longitude of the location
         */
        lon: string;
        lang: lang;
        /**
         * the unit will be passed to the openweather, weatherbit or visualcrossing "units" property, please check their documentation for more info
         */
        unit: "metric" | "imperial" | "standard";
    }
    type returnData = { 
        isLoading: boolean;
        errorMessage: any;
        /**
         * the data object provided from the provider hooks or your custom data provider (check the customization section below to provide your own data)
         */
        data: any;
    };

    interface ReactWeatherProps {
        /**
         * boolean to determine if the component shows a loader until data is ready
         */
        isLoading: boolean;
        /**
         * error message string
         */
        errorMessage: any;
        data: any;
        /**
         * the language to show "humidity" and "wind speed", feel free to open a PR to lang.js to add more languages
         */
        lang: lang;
        /**
         * The name of the location or city to show in the component
         */
        locationLabel?: string;
        /**
         * the labels to be used for temperature and windspeed
         */
        unitsLabels?: {
            temperature: string; 
            windSpeed: string; 
        };
        /**
         * whether or not to show the forecast bottom part of the component
         */
        showForecast?: boolean;
        theme?: {
            fontFamily?: string;
            gradientStart?: string;
            gradientMid?: string;
            gradientEnd?: string;
            locationFontColor?: string;
            todayTempFontColor?: string;
            todayDateFontColor?: string;
            todayRangeFontColor?: string;
            todayDescFontColor?: string;
            todayInfoFontColor?: string;
            todayIconColor?: string;
            forecastBackgroundColor?: string;
            forecastSeparatorColor?: string;
            forecastDateColor?: string;
            forecastDescColor?: string;
            forecastRangeColor?: string;
            forecastIconColor?: string;
        }
    }

    /**
     * Full documentation: https://github.com/farahat80/react-open-weather
     */
    const ReactWeather: FC<ReactWeatherProps>;

    export default ReactWeather;

    /**
     * Full documentation: https://github.com/farahat80/react-open-weather
     */
    export function useOpenWeather (options: options): returnData; 

    /**
     * Full documentation: https://github.com/farahat80/react-open-weather
     */
    export function useWeatherBit (options: options): returnData; 

     /**
     * Full documentation: https://github.com/farahat80/react-open-weather
     */
    export function useVisualCrossing (options: options): returnData; 

}
