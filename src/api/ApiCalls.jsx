import axios from "axios";

const URL = "http://localhost:8080/api";

const fetchWeatherData = async (bodyData) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.post(URL + "/weatherdata", bodyData, config);
    return response;
  } catch (error) {
    console.error("fetchWeatherData error: " + error);
  }
};

export { fetchWeatherData };
