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
