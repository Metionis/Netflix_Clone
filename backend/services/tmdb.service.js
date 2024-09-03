import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  // // Check if the TMDB_AUTHORIZED_KEY is set
  // if (!ENV_VARS.TMDB_AUTHORIZED_KEY) {
  //   throw new Error("TMDB authorization key is missing.");
  // }

  // const options = {
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: `Bearer ${ENV_VARS.TMDB_AUTHORIZED_KEY}`,
  //   },
  // };

  // try {
  //   const response = await axios.get(url, options);

  //   // Check for a successful response
  //   if (response.status !== 200) {
  //     throw new Error(`Failed to fetch data from TMDB: ${response.statusText} (status code: ${response.status})`);
  //   }

  //   return response.data;
  // } catch (error) {
  //   // Log the error for debugging purposes
  //   console.error("Error fetching data from TMDB:", error.message);

  //   // Throw a more descriptive error for handling upstream
  //   throw new Error(`An error occurred while fetching data from TMDB: ${error.message}`);
  // }

  const options = {
    method: 'GET',
    url: url,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TDMB_AUTHORIZED_KEY}`
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
