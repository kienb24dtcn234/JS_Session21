let N = +prompt("Mời bạn nhập một số nguyên:");  
if (N <= 1) {  
    alert("Không phải là số nguyên tố");  
} else if (Number.isInteger(N)) {  
    let x = true; 
    for (let i = 2; i <= Math.sqrt(N); i++) {  
        if (N%i===N && N % i === 0) {  
            x = false;
            break;  
        }  
    }  
    alert("Số nguyên tố đầu tiên là :"+N);  
} else {  
    alert("Dữ liệu nhập vào không hợp lệ");  
}  