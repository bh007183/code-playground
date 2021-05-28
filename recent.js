class RomanNumerals {
  //   constructor(number) {
  //     this.number = number.toString();
  //
  //   }

  toRoman(num) {
    const number = num.toString();

    let arr = [];
    for (let i = 0; i < number.length; i++) {
      switch (number[i]) {
        case "1":
          switch (number.substring(i).length) {
            case 1:
              arr.push("I");
              break;
            case 2:
              arr.push("X");
              break;
            case 3:
              arr.push("C");
              break;
            case 4:
              arr.push("M");
              break;
          }
          break;
        case "2":
          switch (number.substring(i).length) {
            case 1:
              arr.push("II");
              break;
            case 2:
              arr.push("XX");
              break;
            case 3:
              arr.push("CC");
              break;
            case 4:
              arr.push("MM");
              break;
          }
          break;
        case "3":
          switch (number.substring(i).length) {
            case 1:
              arr.push("III");
              break;
            case 2:
              arr.push("XXX");
              break;
            case 3:
              arr.push("CCC");
              break;
            case 4:
              arr.push("MMM");
              break;
          }
          break;
        case "4":
          switch (number.substring(i).length) {
            case 1:
              arr.push("IV");
              break;
            case 2:
              arr.push("XL");
              break;
            case 3:
              arr.push("CD");
              break;
            case 4:
              arr.push("CM");
              break;
          }
          break;
        case "5":
          switch (number.substring(i).length) {
            case 1:
              arr.push("V");
              break;
            case 2:
              arr.push("L");
              break;
            case 3:
              arr.push("D");
              break;
          }
          break;
        case "6":
          switch (number.substring(i).length) {
            case 1:
              arr.push("VI");
              break;
            case 2:
              arr.push("LX");
              break;
            case 3:
              arr.push("DC");
              break;
          }
          break;
        case "7":
          switch (number.substring(i).length) {
            case 1:
              arr.push("VII");
              break;
            case 2:
              arr.push("LXX");
              break;
            case 3:
              arr.push("DCC");
              break;
          }
          break;
        case "8":
          switch (number.substring(i).length) {
            case 1:
              arr.push("VIII");
              break;
            case 2:
              arr.push("LXXX");
              break;
            case 3:
              arr.push("DCCC");
              break;
          }
          break;
        case "9":
          switch (number.substring(i).length) {
            case 1:
              arr.push("IX");
              break;
            case 2:
              arr.push("XC");
              break;
            case 3:
              arr.push("CM");
              break;
          }
          break;
        default:
        // code block
      }
    }
    console.log(arr.join(""));
  }

  fromRoman(rome) {
    let arr = [];

    for (let i = 0; i < rome.length; i++) {
      switch (rome[i]) {
        case "I":
          arr.push(1);
          break;
        case "V":
          arr.push(5);
          break;
        case "X":
          arr.push(10);
          break;
        case "L":
          arr.push(50);
          break;
        case "C":
          arr.push(100);
          break;
        case "D":
          arr.push(500);
          break;
        case "M":
          arr.push(1000);
          break;
        default:
          break;
      }
    }

    let val = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1] && j !== arr.length) {
        val += arr[j + 1] - arr[j];
        j = j + 1;
      } else {
        val += arr[j];
      }
    }

    return val;
  }
}


