import { sum } from "../sum";
test("Sum functio should be calculate the sum of the two numbers",()=>{
   const result = sum(3,4);

   //Assertiom
   expect(result).toBe(7);
})