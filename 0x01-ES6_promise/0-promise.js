export default function getResponseFromAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = "Response from API";
      resolve(data);
    }, 2000);
  });
}
