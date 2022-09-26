import request from "../../../utils/request";

const handelar = async (req, res) => {
  const { data } = await request("/products");

  res.send(data);
};

export default handelar;
