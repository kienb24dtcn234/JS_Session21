let sochan = 0;
let sole = 0;
let a = +prompt("Nhập số đầu tiên :");
if (a % 2 == 0) {
    sochan += 1;
} else {
    sole += 1;
}
let b = +prompt("Nhập số thứ hai :");
if (b % 2 == 0) {
    sochan += 1;
} else {
    sole += 1;
}
let c = +prompt("Nhập số thứ ba :");
if (c % 2 == 0) {
    sochan += 1;
} else {
    sole += 1;
}
let d = +prompt("Nhập số thứ tư :");
if (d % 2 == 0) {
    sochan += 1;
} else {
    sole += 1;
}
let e = +prompt("Nhập số thứ năm :");
if (e % 2 == 0) {
    sochan += 1;
} else {
    sole += 1;
}
alert("Số lượng số chẵn là : " + sochan);
alert("Số lượng số lẻ là : " + sole);

