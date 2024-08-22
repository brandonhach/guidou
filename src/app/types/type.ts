// Define the structure for temperature-related data
export type Temperature = {
  Value: number;
  Unit: string;
  UnitType: number;
};

// Define the structure for the weather forecast data
export type Tforecast = {
  DateTime: string;
  EpochDateTime: number;
  HasPrecipitation: boolean;
  IconPhrase: string;
  IsDaylight: boolean;
  Link: string;
  MobileLink: string;
  PrecipitationProbability: number;
  Temperature: Temperature;
  WeatherIcon: number;
};
