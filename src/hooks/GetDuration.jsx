export const GetDuration = () => {
  const storedDuration = JSON.parse(localStorage.getItem("duration"));
  return storedDuration;
};
