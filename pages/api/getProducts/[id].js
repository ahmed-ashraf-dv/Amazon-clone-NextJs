import request from "../../../utils/request";

const handelar = async (req, res) => {
  try {
    const id = parseInt(req.query.id);
    const { data } = await request(`/products/${id}`);

    res.send(data);
  } catch (err) {
    console.log(err.message);
    res.send({});
  }
};

export default handelar;
