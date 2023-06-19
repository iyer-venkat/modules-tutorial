// import fetch from "node-fetch";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// // dynamic import
// const fetch = (url) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(url));

/****** Node.js globals *******/
// // __dirname is not defined in ESM
// // similaryly, __filename is also not defined in ESM
// // These are only available in CJS modules
// console.log(__dirname);
// console.log(__filename);

// // process.cwd() => current working directory (same as __dirname)
// // fileURLToPath(import.meta.url) => current module's path (__filename)
// console.log(process.cwd());
// console.log(fileURLToPath(import.meta.url));

// // .env/.env.vault keys are not loaded by-default into the process.env
// // dotenv loads your .env keys as well as .env.vault keys into process.env
// dotenv.config({ path: "./.env" });
// console.log(process.env);

/*****  *****/
// const QUESTIONS_API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";

// const main = async () => {
//   const resp = await fetch(QUESTIONS_API_URL);
//   const data = await resp.json();

//   console.log(data);
// };

/***** algo-expert *****/
// const QUESTIONS_API_URL = "https://www.algoexpert.io/api/fe/questions";
// const SUBMISSIONS_API_URL = "https://www.algoexpert.io/api/fe/submissions";
// const USERS_API_URL = "https://www.algoexpert.io/api/fe/users";
// const COURSES_API_URL = "https://www.algoexpert.io/api/fe/courses";

// const getApiData = async () => {
//   return Promise.allSettled([
//     fetch(QUESTIONS_API_URL).then((resp) => resp.json()),
//     fetch(SUBMISSIONS_API_URL).then((resp) => resp.json()),
//     fetch(USERS_API_URL).then((resp) => resp.json()),
//     fetch(COURSES_API_URL).then((resp) => resp.json()),
//   ]);
// };

// const main = async () => {
//   const [questions, submissions, users, courses] = await getApiData();
//   console.log(questions, submissions, users, courses);
// };

// main();
