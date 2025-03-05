let input = +prompt("Mời bạn nhập một số nguyên bất kỳ :");  
let N = "";  
if (input <= 0 || !Number.isInteger(input)) {  
    alert("Vui lòng nhập một số nguyên dương hợp lệ.");  
} else {  
    for (let i = 1; i <= input; i++) {  
        if (input % i === 0) {  
            N += i + ",";  
        }  
    }  
    alert("Các số ước của số nguyên vừa nhập là: " + N.slice(0, N.length - 1));  
}  