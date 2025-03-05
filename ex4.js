let a = +prompt("Mời bạn nhập số a");
let b = +prompt("Mời bạn nhập số b");
let c = +prompt("Mời bạn nhập số c");
let delta = b * b - 4 * a * c;
if (delta < 0) {
    alert("Phương trình vô nghiệm");
} else if (delta == 0) {
    let x = -b / (2 * a);
    alert("Phương trình có nghiệm kép x = " + x);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Phương trình có hai nghiệm x1 = " + x1 + " và x2 = " + x2);
}
