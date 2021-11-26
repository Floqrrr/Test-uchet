import axios from "axios";
const config = {
  headers: {
    "Content-type": "application/json",
  },
};


export const SendTodoAddproduct = (formData) => {
  const body = JSON.stringify(formData);
  console.log(body);
  try {
    const res = axios.post("/api/todo/product", body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const SendTodoAddCategories = (formData) => {
  const body = JSON.stringify(formData);
  console.log(body);
  try {
    const res = axios.post("/api/todo/categories", body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const SendTodoAddSeller = (formData) => {
  const body = JSON.stringify(formData);
  console.log(body);
  try {
    const res = axios.post("/api/todo/seller", body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const SendTodoAddManufacturer = (formData) => {
  const body = JSON.stringify(formData);
  console.log(body);
  try {
    const res = axios.post("/api/todo/manufacturer", body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const SendTodoDeleteManufacturer = (id) => {
  try {
      const res = axios.delete("/api/todo/manufacturer/" + id);
      return res.data;
  } catch (error) {
  return error;
  }
}

export const SendTodoDeleteCategories = (id) => {
  try {
      const res = axios.delete("/api/todo/categories/" + id);
      return res.data;
  } catch (error) {
  return error;
  }
}

export const SendTodoDeleteSeller = (id) => {
  try {
      const res = axios.delete("/api/todo/seller/" + id);
      return res.data;
  } catch (error) {
  return error;
  }
}

export const SendTodoDeleteProduct = (id) => {
  try {
      const res = axios.delete("/api/todo/product/" + id);
      return res.data;
  } catch (error) {
  return error;
  }
}

export const SendTodoAddOrder = (formData) => {
  const body = JSON.stringify(formData);

  console.log(body);
  
  try {
    const res = axios.post("/api/todo/order", body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const SendSearch = (formData) => {
  const body = JSON.stringify(formData);

  console.log(body);
  
  try {
    const res = axios.get("/api/todo/order", body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateProduct = (formData, id) => {
    const body = JSON.stringify(formData);
    console.log(body);
    try {
        const res = axios.put("/api/todo/product/" + id,  body, config);
        return res.data;
    } catch (error) {
    return error;
  }
};

export const updateProductOrder = (formData, id) => {
  console.log(config);
  const body = JSON.stringify(formData);
  try {
      const res = axios.put("/api/todo/productOrder/" + id, body, config);
      return res.data;
  } catch (error) {
  return error;
}
};

export const deleteTodo = (id) => {
    try {
        const res = axios.delete("/api/todo/components/" + id);
        return res.data;
    } catch (error) {
    return error;
    }
}