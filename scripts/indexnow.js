const axios = require("axios");

const API_KEY = "8ea93161427241638177be36a80f4d31";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const BASE_URL = "https://www.wildthings.com/";
const keyLocation =
  "https://www.wildthings.com/8ea93161427241638177be36a80f4d31.txt";

(async () => {
  const pages = ["https://www.wildthings.com/"];

  try {
    const response = await axios.post(
      INDEXNOW_ENDPOINT,
      {
        host: BASE_URL,
        key: API_KEY,
        keyLocation: keyLocation,
        urlList: pages,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (response.status === 200) {
      console.log("URLs submitted to IndexNow successfully.");
    }
  } catch (error) {
    console.error("Error submitting URLs to IndexNow:", error.message);
  }
})();
