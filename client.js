const axios = require('axios');

exports.getTimeData = async (area, city) => {
  const response = await axios(
    `http://worldtimeapi.org/api/timezone/${
      area && city ? area + "/" + city : ""
    }`
  );

  return response.data;
};
