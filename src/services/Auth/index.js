import api from "../api";
async function signIn(data) {
  console.log(data);
  return api
    .post("/auth", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      const messageError = err.response.data.messager
        ? err.response.data.messager
        : err.response.data.error;
      console.log(err.response.data);
      throw {
        error: err,
        message: messageError,
        statusCode: err.code,
      };
    });
}

export default signIn;
