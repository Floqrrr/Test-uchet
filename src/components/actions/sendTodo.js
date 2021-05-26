import axios from "axios";
const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const sendTodo = (formData) => {
  const body = JSON.stringify(formData);
  console.log(body);
  try {
    const res = axios.post("/api/todo/components", body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateTodo = (formData, id) => {
    const body = JSON.stringify(formData);
    console.log(body);
    try {
        const res = axios.put("/api/todo/components/" + id, body, config);
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