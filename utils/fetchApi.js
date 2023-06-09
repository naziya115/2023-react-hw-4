import axios from "axios";

export const baseUrl = "https://thronesapi.com";

export const fetchAllCharacters = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/v2/Characters`);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
