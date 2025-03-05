let a = +prompt("Mời bạn nhập số nguyên đầu tiên");
let b = +prompt("Mời bạn nhập số nguyên thứ hai");
let c = +prompt("Mời bạn nhập số nguyên thứ ba");
let d = +prompt("Mời bạn nhập số nguyên thứ tư");
let e = +prompt("Mời bạn nhập số nguyên thứ năm");
let x = 0;
if (a % 2 == 1) {   
    x = a + x;  
}  
if (b % 2 == 1) {   
    x = b + x; 
}  
if (c % 2 == 1) {   
    x = c + x;  
}  
if (d % 2 == 1) {   
    x = d + x;  
}  
if (e % 2 == 1) {   
    x = e + x;  
}  
alert("Tổng các số lẻ là: " + x);