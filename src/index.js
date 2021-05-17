import _ from "lodash";

// const helpers = require("./helpers.js");
// const { getRandomIDArray } = helpers;

import { getRandomIDArray, getRandomIDArrayByLenght} from "./helpers";

const MyArr = getRandomIDArray();
const result = _.chunk (MyArr, 3);

const MyArr2 = getRandomIDArrayByLenght(5);
const result2 = _.chunk (MyArr2, 2);

console.log(result);
console.log(result2);