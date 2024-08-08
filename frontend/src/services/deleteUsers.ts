async function deleteUser(username: string, setMsg: (message: string) => void) {
  await fetch("http://localhost:8080/register", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify("chch"),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message == "user delete sucess!!") {
        setMsg(res.message);
      } else {
        setMsg(res);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export { deleteUser };
