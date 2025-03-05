let tien = 1000;  
let time = 3;  
const laiSuatThang = 1 / 100;  

let tienLai = tien;  
for (let i = 0; i < time; i++) {  
  tienLai += tienLai * laiSuatThang; 
}  

let lai = tienLai - tien; 
document.write("Số tiền lãi ngân hàng là: " + lai.toFixed(3) + " VNĐ" + "<br>");   
document.write("Tổng tiền nhận được là: " + tienLai.toFixed(3) + " VNĐ");  