/**
 * 1. Hàm là gì? Cách khởi tạo hàm
 * 2. Tham số, tham trị
 * 3. Từ khóa return -> Trả về
 * 4. Function Expression, Arrow Function
 * 5. Callback
 */

/**
 * 1. Hàm là một khối câu lệnh, gọi để chạy lại
 * 2. Cách khởi tạo hàm
 */

// // 1. Decleration Function
// function myFunc(a, b) {
//   console.log(a, b);
// } // Khối câu lệnh - Code Block

// myFunc("Hello World", "abc");

/**
 * 1. Tạo 1 hàm tên là printName
 * 2. Có 1 tham số tên là name
 * 3. Trong hàm, in ra lời chào name đó: Hello, Khang
 */

/**
 * 1. Tạo 1 hàm tên là introduce
 * 2. Hàm này sẽ nhận 3 tham số: name, age, address
 * 3. In ra câu: Xin chào, tôi tên là..., năm nay tôi...tuổi, Tôi đang sinh sống ở...
 */

/**
 * 1. Tạo một hàm tên là calculatePytago
 * 2. Hàm này sẽ nhận vào 2 tham số: canhGocVuong1, canhGocVuong2
 * 3. Tính cạnh huyền và trả về kết quả
 */

// console.log(Math.sqrt(3 + 5 + Math.pow(2, 4)));

// function calculateArea(dai, rong) {
//   let area = dai * rong;
//   return area;
// }

// console.log(calculateArea(3, 5));

// 3. Function Expression
// const myFunc = function () {
//   console.log("Hello");
// };

// myFunc();

// 4. Arrow Function (ES6 - 2015)
// const display = (callback) => {
//   let number1 = 4;
//   let number2 = 8;

//   let result = callback(number1, number2);

//   const newCallback = () => {
//     console.log(result);
//   };

//   return newCallback;
// };

// const sum = (a, b) => a + b;

// let number = 8;

// display(sum);

/**
 * 1. Tạo một hàm tên là calculator
 * 2. Hàm này sẽ nhận vào 3 tham số: number1, number2, operator -> "+", "-", "*", "/"
 * 3. Trong hàm, kiểm tra phép toán đó là gì, thực hiện phép toán tương tự
 * 4. Trả về kết quả
 * Lưu ý: Viết bằng Arrow Function
 */

const calculator = (number1, number2, operator) => {
  switch (operator) {
    case "+": {
      return number1 + number2;
    }
    case "-": {
      return number1 - number2;
    }
    case "*": {
      return number1 * number2;
    }
    case "/": {
      if (number2 === 0) {
        return "Không thể chia cho 0";
      }

      return number1 / number2;
    }
    default: {
      return "Phép tính không hợp lệ";
    }
  }
};

console.log(calculator(3, 0, "#"));

/**
 * 1. Viết một hàm findDayOfWeek
 * 2. Hàm này sẽ nhận vào 3 tham số: day, month, year
 * 3. Trả về thứ trong tuần: Thứ 2, Thứ 3, Thứ 4...
 * Gợi ý: const d = new Date(day, month - 1, year) -> d.getDay(); (0 -> 6: Thứ 2 -> Chủ Nhật)
 */
