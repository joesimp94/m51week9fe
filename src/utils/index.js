import { getTokenFromCookie, writeCookie } from "../common";

export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch(`http://localhost:5001/user/register`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`http://localhost:5001/user/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    writeCookie("jwt_token", data.user.token, 7);
    return data.user;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const token = getTokenFromCookie("jwt_token");

    const response = await fetch(`http://localhost:5001/user`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data.users;
  } catch (error) {
    console.log(error);
  }
};

export const authCheck = async (jwt) => {
  console.log("hello from authCheck");
  try {
    const response = await fetch("http://localhost:5001/user/authCheck", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    // data.user.token = jwt;
    return data.user;
  } catch (error) {
    console.log(error);
  }
};
