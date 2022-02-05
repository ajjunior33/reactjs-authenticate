import api from "../api";
async function signIn(data) {
  console.log(data);
  return api
    .post("/auth", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw {
        error: err,
        message: err.message,
        statusCode: err.code,
      };
    });
}

export default signIn;
