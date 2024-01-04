const parentObject = {};

parentObject.getFood = (name) => {
  console.log(`I am eating ${name} today `);
};

parentObject.getFood("Yam and kontomire stew");

//Use the object.Create function to create a new object
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
