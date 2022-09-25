// Bài 1: nhập n kiểm tra xem n có hợp lệ hay không tính 0+1+...+n;
//....................................................
/* let number=+prompt(" mời nhập số tự nhiên n");
let numberCheck=Number.isInteger(number);
let sum=0
if(numberCheck==true&& number>0){
   for (let i = 0; i <=number; i++) {
    sum+=i
    
   }
   console.log(`tổng từ 0 đến ${number} là: ${sum} `);
}else{
   console.log(" không phải số tự nhiên!");
} */
// Bài 2: nhập n kiểm tra xem n có hợp lệ hay không tính 0*1*...*n;
// tương tự bài 1
//....................................................
// Bài 3: Nhập n,tính C=1+1/2+..+1/n
/* let number = +prompt(" mời nhập số tự nhiên n");
let numberCheck = Number.isInteger(number);
let sum = 0
if (numberCheck == true && number > 0) {
    for (let i = 1; i <= number; i++) {
        sum +=1/i

    }
    console.log(`kết quả của phép tính là: ${sum} `);
} else {
    console.log(" không phải số tự nhiên!");
} */
//....................................................
//Bài 4: A=1*1/2+1/2*1/3+1/3*1/4 +...+1/(n-1)*1/n
/* let number = +prompt(" mời nhập số tự nhiên n");
let numberCheck = Number.isInteger(number);
let sum = 0
if (numberCheck == true && number > 0) {
    for (let i = 1; i <= number; i++) {
        sum += 1/i*1/(i+1)

    }
    console.log(`kết quả  của phép tính là: ${sum} `);
} else {
    console.log(" không phải số tự nhiên!");
}
 */
//....................................................
// Bài 5: nhập n in ra bảng cửa chương 

   /*  let n=prompt("nhập n ")
    document.write("<table border=1 width=80px>")
    for (i = 1; i <= 10;i++ ) {
        document.write("<tr>")
       
         document.write("<td>" + n + "x" + i + "=" + (n * i));
        document.write("</td>");
        document.write("</tr>")
    }
    document.write("</tr></table>")
 */
//....................................................
//Bài 6 : nhập n in ra dãy số fibonaxi
/* const number = +prompt('nhập số : ');
let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
} */
//....................................................
// Bài 7 : 
/* let n=+prompt("mời nhập n!")
for (let i = 0; i <= n; i++) {
    if(i%2==0){
        console.log("số chẵn là :",i);
    }
    if (i % 2 != 0) {
        console.log("số lẻ  là :", i);
    }
    
} */
//....................................................
// Bài 8: tương tự bài 7.
// Bài 9: Kiểm tra số nguyên tố

  /*   // Biến cờ hiệu
    let n= +prompt("mời nhập số để kiểm tra!")
    var flag = true;
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
// Kiểm tra biến flag
if (flag == true) {
   console.log(n + " là số nguyên tố ");
}
else {
   console.log(n + " không phải là số nguyên tố ");
} */
//Bài 10: In tam giác
/* let hight=+prompt("mời nhập chiều cao của tam giác!")
for (let i = 1; i <= hight; ++i) {
    for (let j = 1; j <= i; ++j) {
        document.write("*");
    }
   document.write("<br/>")

} */
//....................................................


  
