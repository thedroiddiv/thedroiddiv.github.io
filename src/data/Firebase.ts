// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import Project, { projectConverter } from "./models/project";

require("firebase/firestore");
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
const firestore = getFirestore();

export const getProjects = async (): Promise<Project[]> => {
  const querySnapshot = await getDocs(
    collection(firestore, "projects").withConverter(projectConverter)
  );
  const projects = querySnapshot.docs.map((project) => project.data());
  return projects;
};
