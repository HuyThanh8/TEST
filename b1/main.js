// function soNgTo(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i < n - 1; i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
function tinhtong() {
    let a = parseInt(document.getElementById("number-a").value);
    let b = parseInt(document.getElementById("number-b").value);
    let arr = new Array(); j = 0; tong = 0;
    for (let i = a; i < b; i++) {
        if (a > 0 && b > 0 && i % 2 === 1) {
            arr[j] = i;
            tong += i;
        }
        j++;
    }
    document.getElementById('tong').innerHTML = arr + " " + "có tổng là" + " " + tong;
}