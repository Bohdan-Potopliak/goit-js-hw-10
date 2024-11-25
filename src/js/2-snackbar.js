`use strict`
import iziToast from "izitoast";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = parseInt(form.elements["delay"].value);
    const state = form.elements["state"].value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfilled") {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then((delay) => {
        iziToast.success({
          title: "Success",
          message: `✅ Fulfilled promise in ${delay}ms`,
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: "Error",
          message: `❌ Rejected promise in ${delay}ms`,
        });
      });
  });
});