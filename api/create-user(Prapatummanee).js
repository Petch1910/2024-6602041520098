import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/local/register";
const AUTH_TOKEN =
  "Bearer 7a48ff4470d5c641eb5a768ae4f79a09d7b24ee7ebc55784b971e6b663de803b54d756fca9eefd61157ab08f9b25beb4bfdd14e9ce1be83e42fa7d00e0dd447568786f6411c705ff352c641ac0a76663b9449c17e07a433f2f56bf9bf1227346af58fa6c5711b68e8d132b9b176c0e0c8b0cd31ef995e4b602c92d75784ac8df";

const userData = {
  username: "Kapman22",
  email: "test@test22.com",
  password: "Password22",
};

const createUser = async () => {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    });

    console.log("User profile:", response.data.user);
    console.log("User token:", response.data.jwt);
  } catch (error) {
    if (error.response) {
      console.error("An error occurred:", error.response.data);
    } else {
      console.error("An unexpected error occurred:", error.message);
    }
  }
};

createUser();
