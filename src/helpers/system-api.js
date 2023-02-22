export const postApi = async (command) => {
  let formData = new FormData();
  formData.append("command", command);

  const response = await fetch("http://ik.olleco.net/morse-api/", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};
