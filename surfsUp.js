class Surftime {
  constructor(penguin, chicken, other) {
    this.penguin = penguin;
    this.chicken = chicken;
    this.other = other;
  }
  getPenguin = () => {
    if (this.penguin === "penguin") {
      console.log("yes sir");
    } else {
      console.log("no way jose");
    }
  };
}

class Build extends Surftime {
  constructor(penguin, chicken, other, name, value) {
      super(penguin, chicken, other)
      this.name = name
      this.value = value;

      this.getName =  () => {
        console.log("getName");
      };
  }
  
}
// function Build(penguin, chicken, other, name, value) {
//   super(penguin, chicken, other);
//   (this.name = name), (this.value = value);

//   getName = () => {
//     console.log("getName");
//   };
// }

// Build.prototype = Object.create(Surftime.prototype);

Build.prototype.constructor = Build;

let Kevin = new Build(
  "Emperor",
  "Does not taste like",
  "im surking my responsabilities",
  "Kevin",
  "100$"
);

// console.log(Kevin);
console.log(Kevin.getPenguin())
console.log(Kevin.getName())
