// select the elements: numbers.
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const hundred = document.getElementById("hundred");

// select the elements: display area.
const formula = document.querySelector(".formula");
const result = document.querySelector(".result");

// select the elements: operators.
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiple = document.getElementById("multiple");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");

// select the elements: functional buttons.
const point = document.getElementById("point");
const clean = document.getElementById("clean");
const backspace = document.getElementById("backspace");

// using vue.js to control
var app = new Vue({
  el: "#app",
  data: {
    // 尚未輸入數字則顯示為 0 的機制
    currentValue: 0,
    isDecimal: false,
    previousValue: "",
    // 用來記錄運算符號的字串，有可能為 "plus", "minus", "multiply", "divide"
    mathOperator: "",
    resultValue: "",
    notResult: true,
    equationText: "",
  },
  methods: {
    enterZero: function () {
      this.notResult = true;
      this.currentValue += "0";
      // 對 .0 和 .00 不轉回數字，才能輸入 1.01, 1.001
      // 尚未加入小數點時，也同樣轉回數字，避免 0010 之類的輸入出現
      if (this.isDecimal === false) {
        this.currentValue = Number(this.currentValue);
      }
    },
    enterOne: function () {
      this.notResult = true;
      this.currentValue += "1";
      this.currentValue = Number(this.currentValue);
    },
    enterTwo: function () {
      this.notResult = true;
      this.currentValue += "2";
      this.currentValue = Number(this.currentValue);
    },
    enterThree: function () {
      this.notResult = true;
      this.currentValue += "3";
      this.currentValue = Number(this.currentValue);
    },
    enterFour: function () {
      this.notResult = true;
      this.currentValue += "4";
      this.currentValue = Number(this.currentValue);
    },
    enterFive: function () {
      this.notResult = true;
      this.currentValue += "5";
      this.currentValue = Number(this.currentValue);
    },
    enterSix: function () {
      this.notResult = true;
      this.currentValue += "6";
      this.currentValue = Number(this.currentValue);
    },
    enterSeven: function () {
      this.notResult = true;
      this.currentValue += "7";
      this.currentValue = Number(this.currentValue);
    },
    enterEight: function () {
      this.notResult = true;
      this.currentValue += "8";
      this.currentValue = Number(this.currentValue);
    },
    enterNine: function () {
      this.notResult = true;
      this.currentValue += "9";
      this.currentValue = Number(this.currentValue);
    },
    enterHundred: function () {
      this.notResult = true;
      this.currentValue += "00";
      if (this.isDecimal === false) {
        this.currentValue = Number(this.currentValue);
      }
    },

    // --- End of Numbers ---

    clickPoint: function () {
      this.isDecimal = true;
      this.currentValue += ".";
    },

    clickPlus: function () {
      // 當運算態要進行連續運算的狀況，先計算目前結果
      // 1. 非運算態 notResult 為 true
      // 2. previousValue 已經放入值，非初始的 ""
      if (this.notResult === true && this.previousValue !== "") {
        if (this.mathOperator === "plus") {
          this.previousValue = this.previousValue + this.currentValue;
        } else if (this.mathOperator === "minus") {
          this.previousValue = this.previousValue - this.currentValue;
        } else if (this.mathOperator === "multiply") {
          this.previousValue = this.previousValue * this.currentValue;
        } else if (this.mathOperator === "divide") {
          this.previousValue = this.previousValue / this.currentValue;
        }
        // 清空 currentValue，並給予正確運算符號
        this.currentValue = 0;
        this.isDecimal = false;
        this.mathOperator = "plus";
      } else {
        // 將 currentValue 值賦予到 previousValue，並清空 currentValue
        this.previousValue = this.currentValue;
        this.currentValue = 0;
        // 清空 currentValue 後，恢復讓小數點可用的狀況
        this.isDecimal = false;
        // 當結果狀態(有按等號)要直接運算的狀況，轉成運算態
        this.notResult = true;
        this.mathOperator = "plus";
      }
    },
    clickMinus: function () {
      if (this.notResult === true && this.previousValue !== "") {
        if (this.mathOperator === "plus") {
          this.previousValue = this.previousValue + this.currentValue;
        } else if (this.mathOperator === "minus") {
          this.previousValue = this.previousValue - this.currentValue;
        } else if (this.mathOperator === "multiply") {
          this.previousValue = this.previousValue * this.currentValue;
        } else if (this.mathOperator === "divide") {
          this.previousValue = this.previousValue / this.currentValue;
        }
        this.currentValue = 0;
        this.isDecimal = false;
        this.mathOperator = "minus";
      } else {
        this.previousValue = this.currentValue;
        this.currentValue = 0;
        this.isDecimal = false;
        this.notResult = true;
        this.mathOperator = "minus";
      }
    },
    clickMultiply: function () {
      if (this.notResult === true && this.previousValue !== "") {
        if (this.mathOperator === "plus") {
          this.previousValue = this.previousValue + this.currentValue;
        } else if (this.mathOperator === "minus") {
          this.previousValue = this.previousValue - this.currentValue;
        } else if (this.mathOperator === "multiply") {
          this.previousValue = this.previousValue * this.currentValue;
        } else if (this.mathOperator === "divide") {
          this.previousValue = this.previousValue / this.currentValue;
        }
        this.currentValue = 0;
        this.isDecimal = false;
        this.mathOperator = "multiply";
      } else {
        this.previousValue = this.currentValue;
        this.currentValue = 0;
        this.isDecimal = false;
        this.notResult = true;
        this.mathOperator = "multiply";
      }
    },
    clickDivide: function () {
      if (this.notResult === true && this.previousValue !== "") {
        if (this.mathOperator === "plus") {
          this.previousValue = this.previousValue + this.currentValue;
        } else if (this.mathOperator === "minus") {
          this.previousValue = this.previousValue - this.currentValue;
        } else if (this.mathOperator === "multiply") {
          this.previousValue = this.previousValue * this.currentValue;
        } else if (this.mathOperator === "divide") {
          this.previousValue = this.previousValue / this.currentValue;
        }
        this.currentValue = 0;
        this.isDecimal = false;
        this.mathOperator = "divide";
      } else {
        this.previousValue = this.currentValue;
        this.currentValue = 0;
        this.isDecimal = false;
        this.notResult = true;
        this.mathOperator = "divide";
      }
    },
    clickEqual: function () {
      // 按下等號，進入結果狀態
      this.notResult = false;
      // 處理四則運算和*結果溢位
      if (this.mathOperator === "plus") {
        this.resultValue =
          (this.previousValue * 100 + this.currentValue * 100) / 100;
      } else if (this.mathOperator === "minus") {
        this.resultValue = this.previousValue - this.currentValue;
      } else if (this.mathOperator === "multiply") {
        this.resultValue = this.previousValue * this.currentValue;
      } else if (this.mathOperator === "divide") {
        this.resultValue = this.previousValue / this.currentValue;
      }

      this.equationText =
        this.previousValue +
        " " +
        this.showOperator +
        " " +
        this.currentValue +
        " = " +
        this.resultValue;

      // 清除上次計算的記憶
      this.previousValue = "";
      this.mathOperator = "";

      // 再讓 resultValue 成為 currentValue，以便直接進到下一步計算
      this.currentValue = this.resultValue;
    },
    clickBack: function () {
      // 限定只有在輸入狀態才能退回，結果狀態不行倒退
      if (this.notResult === true) {
        let currentString = String(this.currentValue);
        let currentStringArray = currentString.split("");
        currentStringArray.pop();
        this.currentValue = Number(currentStringArray.join(""));
      }
    },
    clickClean: function () {
      // 切回初始資料狀態
      this.currentValue = 0;
      this.isDecimal = false;
      this.previousValue = "";
      this.mathOperator = "";
      this.resultValue = "";
      this.notResult = true;
      this.equationText = "";
    },
  },
  computed: {
    equationDisplay: function () {
      // 判斷算式欄位現在要顯示的值
      // 當 notResult 為真時，動態回傳算式 x + y
      if (this.notResult === true) {
        return (
          this.previousValue + " " + this.showOperator + " " + this.currentValue
        );
      }
      // 按下等號後，回傳由字串組成的方程式紀錄
      else {
        return this.equationText;
      }
    },
    // 尚未按下等號時，回傳 currentValue
    // 按下等號後，回傳 resultValue
    mainDisplay: function () {
      if (this.notResult === true) {
        return this.currentValue;
      } else {
        return this.resultValue;
      }
    },
    // 按下任意四則鍵產生 mathOperator，回傳對應的符號到呼叫 showOperator 的地方
    showOperator: function () {
      if (this.mathOperator === "plus") {
        return "\u002B";
      } else if (this.mathOperator === "minus") {
        return "\u2212";
      } else if (this.mathOperator === "multiply") {
        return "\u00D7";
      } else if (this.mathOperator === "divide") {
        return "\u00F7";
      } else {
        return "";
      }
    },
  },
});

// function displayResult() {
//   // if (currentNum > 9999999999) {
//   //   result.textContent = "Error";
//   //   return;
//   // }
//   result.textContent = currentNum;
//   console.log(currentNum, typeof currentNum);
// }
