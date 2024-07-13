import axios from "axios";
const baseurl = "https://66926825346eeafcf46cd14d.mockapi.io/users/DATA";
const resInstance = axios.create({
  baseURL: baseurl,
 
  headers: {
    "X-Custom-Header": "foobar",
    field: "person",
  },
});

const getAllRes = async () => {
  const response = await resInstance.get("");
  return response.data;
};
const editRes = async (id, updatedRes) => {
  const response = await resInstance.put(`${id}`, updatedRes);
  return response.data;
};
const deleteRes = async (id) => {
  const response = await resInstance.delete(`${id}`);
  return response.data;
};
const addRes = async (addDataRes) => {
  const response = await resInstance.post("", addDataRes);
  return response.data;
};

export { getAllRes, editRes, deleteRes, addRes };