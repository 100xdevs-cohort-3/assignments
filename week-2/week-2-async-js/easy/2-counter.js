let count = 1;

const counter = (count) => {
  console.log(count);
  setTimeout(() => counter(count + 1), 1000);
};

counter(count);
