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
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
