//01. Example:- Promises

const delay1 = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

console.log("Zero seconds wait");
delay1(1).then(() => console.log("One seconds wait"));
delay1(5).then(() => console.log("Five seconds wait"));

//02. Loading data with fetch()

const getPeopleInSpace = () =>
  fetch("http://api.open-notify.org/astros.json").then((res) => res.json());

getPeopleInSpace().then(console.log);

//03. Async() and await()

const delay2 = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const countToFive = async () => {
  console.log("zero seconds wait");
  await delay2(2);
  console.log("Two seconds wait");
  await delay2(5);
  console.log("Five seconds wait");
};

countToFive();

//04. Async with fetch

const githubRequest = async (loginName) => {
  try {
    var response = await fetch(
      `http://api.github.com/users/${loginName}/followers`
    );
    var json = await response.json();
    var followerList = json.map((user) => user.login);
    console.log(followerList);
  } catch (e) {
    console.log("Data didn't load", e);
  }
};

githubRequest("burhaann");
