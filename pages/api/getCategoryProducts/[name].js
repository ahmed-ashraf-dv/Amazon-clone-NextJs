import request from "../../../utils/request";

const handelar = async (req, res) => {
  try {
    const categoryName = req.query.name;
    const { data } = await request(`/products/category/${categoryName}`);

    res.send(data);
  } catch (err) {
    res.send([]);
  }
};

export default handelar;
