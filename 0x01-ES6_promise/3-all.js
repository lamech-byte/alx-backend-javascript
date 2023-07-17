import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoData, userData]) => {
      console.log(`First Name: ${userData.firstName}`);
      console.log(`Last Name: ${userData.lastName}`);
    })
    .catch((error) => {
      console.error("Signup system offline");
    });
}

export default handleProfileSignup;
