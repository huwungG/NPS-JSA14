// let menu=[]
// let input;
// do {

//   input = prompt("Mời người dùng nhập vào C,R,U,D").toLocaleLowerCase().trim();
//   if (input == "c") {
//     menu.push(prompt("Mời người dùng nhập vào món mới").trim());
//   }
//   else if (input == "r") {
//     console.log(menu);
//   }
//   else if (input == "u") {
//     let phanTuMuonThayThe = prompt("Mời người dùng nhập vào phần tử muốn thay thế").trim();
//     let ViTriPhanTuMuonThayThe = menu.indexOf(phanTuMuonThayThe);
//     menu[ViTriPhanTuMuonThayThe] = prompt("Mời người dùng nhập vào món ăn mới").trim();
//   }
//   else if (input == "d") {
//     let phanTuMuonXoa = prompt("Mời người dùng nhập vào phần tử muốn xóa").trim();
//     let ViTriPhanTuMuonXoa = menu.indexOf(phanTuMuonXoa);
//     menu.splice(ViTriPhanTuMuonXoa, 1);
//   }
//   else {
//     // alert("Đã thoát chương trình");

//   }

//   // input = prompt("Mời người dùng nhập vào C,R,U,D").toLocaleLowerCase().trim();
// }
// else {
//   alert("Đã thoát chương trình");
// }
// while (input == "c" || input == "r" || input == "u" || input == "d");

// khai bao ham
// function sum(a,b){
//     console.log(a+b)
// }
// sum(1,2)
// function sum (a,b){
//     return a+b;
// }
// console.log(
//     sum(3,8)
// )
let arr=[1,2,3,4,5,6,7,8,9,10]
function sum(arr){
    for(i=0;i<=arr.length;i++){
        if(i**1/2==0){
            console.log(i)
        }
    }
}
console.log(sum(arr))

