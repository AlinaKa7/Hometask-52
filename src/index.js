import Add from "./components/Add.js";
import Div from "./components/Div.js";
import Mult from "./components/Mult.js";
import Sub from "./components/Sub.js";


const addCalculator = new Add(40, 5);
console.log(addCalculator.add());

const divCalculator = new Div(100, 20);
console.log(divCalculator.div());

const subCalculator = new Sub(20, 10);
console.log(subCalculator.sub());

const multCalculator = new Mult(10, 3);
console.log(multCalculator.mult());

