import axios from "axios";

axios.defaults.baseURL = "http://demo1030918.mockable.io/";

export const apiGetOptions = async () => {
  try {
    const resp = await axios.get("/").then((response) => response);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiAddContact = async (contact) => {
  try {
    const { data } = await axios.post("/contacts", contact);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const apiDeleteContact = async (id) => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log("error: ", error);
  }
};
