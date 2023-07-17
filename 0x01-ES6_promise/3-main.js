import handleProfileSignup from "./3-all.js";

const response = handleProfileSignup();
response.then((data) => {
  console.log("Response from handleProfileSignup:", data);
}).catch((error) => {
  console.error("Error during handleProfileSignup:", error);
});
