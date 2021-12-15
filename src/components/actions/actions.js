import axios from "axios";

export const getData = async () => {
  const product = await axios.get("/api/todo/product");
  const seller = await axios.get("/api/todo/seller");
  const order = await axios.get("/api/todo/order");
  const manufacturer = await axios.get("/api/todo/manufacturer");
  const categories = await axios.get("/api/todo/categories");
  const departament = await axios.get("/api/todo/departament");
  const post = await axios.get("/api/todo/post");
  return { posts: post.data, products: product.data, sellers: seller.data, orders: order.data, manufacturers: manufacturer.data, departaments: departament.data, categoriess: categories.data};
};

