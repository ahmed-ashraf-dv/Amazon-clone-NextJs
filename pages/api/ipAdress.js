const axios = require("axios");

const handelar = async (req, res) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("ip", req.socket.remoteAddress);

  try {
    const options = {
      method: "POST",
      url: "https://ip-location5.p.rapidapi.com/get_geo_info",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RapidAPI_Key,
        "X-RapidAPI-Host": "ip-location5.p.rapidapi.com",
      },
      data: encodedParams,
    };

    const { data } = await axios(options);

    const collectData = {
      countryName: data.country?.name || "Egypt",
      countryCode: data.country?.code || "EG",
      city: data.city || "Cairo",
    };

    res.send(collectData);
    //
  } catch (err) {
    res.send(err.message);
  }
};

export default handelar;
