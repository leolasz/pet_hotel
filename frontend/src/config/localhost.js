const firebaseConfig = {
  apiKey: "AIzaSyBepr7mKIUUe6AyX9uMnDa9KyhBXhuoGyQ",
  authDomain: "pethotel-prod.firebaseapp.com",
  databaseURL: "https://pethotel-prod.firebaseio.com",
  projectId: "pethotel-prod",
  storageBucket: "pethotel-prod.appspot.com",
  messagingSenderId: "752043195655",
  appId: "1:752043195655:web:e897709bb82514f4f019a2",
  measurementId: "G-ESHYYKWFF6"
};  


// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/australia-southeast1/api/graphql`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export default {
  firebaseConfig,
  backendUrl,
};
