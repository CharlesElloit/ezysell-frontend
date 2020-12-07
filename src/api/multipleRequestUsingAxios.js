import axios from "axios";

let urlOne = "https://api.storyblock.com/v1/cdn/stories/health?/";
let urlTwo = "https://randomuser.me";
let urlThree = "https://";

const requestOne = axios.get(urlOne);
const requestTwo = axios.get(urlTwo);
const requestThree = axios.get(urlThree);

axios
  .all([requestOne, requestTwo, requestThree])
  .then(
    axios.spread((...responses) => {
      responseOne = responses[0];
      responseTwo = responses[1];
      requestThree = responses[2];

      console.log(responseOne, responseTwo, requestThree);
    })
  )
  .catch(errors => {
    console.error(errors);
  });
