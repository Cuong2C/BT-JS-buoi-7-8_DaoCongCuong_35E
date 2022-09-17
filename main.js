// Nhập số vào mảng
var arr = [];
function themVaoMang() {
    var soNhap = document.getElementById("nhapSoNguyen").value * 1;
    if(soNhap%1==0){
        arr.push(soNhap);
    }else{
        alert("Vui lòng nhập số nguyên");
    }
    
    document.getElementById("mangDaNhap").innerHTML = arr;
}

// Tổng các số đã nhập vào mảng
function tinhTongSO() {
    var ketQua = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            ketQua += arr[i];
        }
    }
    document.getElementById("tongSo").innerHTML = ketQua;
}
// Đếm số dương trong mảng
function demSoDuong(){
    var dem = 0;
    for(var i =0; i<arr.length;i++){
        if(arr[i]>0){
            dem++;
        }
    }
    document.getElementById("soDuong").innerHTML = dem;
}


// Tìm số nhỏ nhất
function timMin() {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    document.getElementById("soMin").innerHTML = min;
}

// Tìm số duong nhỏ nhất
function timMinDuong() {
    var min = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            min = arr[i];
            break;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && min > arr[i]) {
            min = arr[i];
        }
    }
    if (min == 0) {
        min = "mảng không có số nguyên dương";
    }

    document.getElementById("soMinDuong").innerHTML = min;
}
// Tìm số chẵn cuối
function soChanCuoi(){
    var chanCuoi = -1;
    for(var i = 0; i< arr.length; i++){
        if(arr[i]%2==0){
            chanCuoi = arr[i];
        }
    }
    document.getElementById("chanCuoi").innerHTML = chanCuoi;
}

//Đổi chổ 2 giá trị trong mảng
function doiCho(){
    var vt1 = document.getElementById("nhapVT1").value;
    var vt2 = document.getElementById("nhapVT2").value;
    var tam;
    tam = arr[vt1];
    arr[vt1] = arr[vt2];
    arr[vt2]= tam;
    document.getElementById("sauDoiCho").innerHTML = arr;
}

// Sắp xếp mảng tăng dần
function sapXepTang(){
    var tam;
    for(var i =0; i<arr.length-1;i++){
        for(var j = i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                tam = arr[i];
                arr[i]=arr[j];
                arr[j]=tam;
            }
        }
        
    }
    document.getElementById("xepTangDan").innerHTML=arr;
}

//số nguyên tố dầu tiên
function timSNT(){
    var SNT = -1;
    var dem = 0;
    for(var i =0; i< arr.length; i++){
        if(arr[i]==2||arr[i]==3){
            SNT = arr[i];
            break;
        }else if(arr[i]>3){
            for(var j = 2; j <=arr[i]/2;j++){
                if(arr[i]%j==0){
                    dem ++;
                }
            }
            if(dem == 0){
                SNT = arr[i];
                break;
            }
        }

    }
    document.getElementById("SNT").innerHTML = SNT;
}

// Tạo mảng số thực
var mangThuc = [];
function themSoThuc() {
    var soNhap = document.getElementById("nhapSoThuc").value * 1;
    
        mangThuc.push(soNhap);
   
    document.getElementById("mangSoThuc").innerHTML = mangThuc;
}
function demSoNguyen(){
    var dem =0;
    for(var i =0; i<mangThuc.length; i++){
        if(Number.isInteger(mangThuc[i])){
            dem++;
        }
    }
    document.getElementById("cacSoNguyen").innerHTML = dem;
}

// So sánh lượng số âm và dương
function soSanh(){
    var demAm = 0;
    var demDuong = 0;
    var ketQua;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]<0){
            demAm++;
        }else if(arr[i]>0){
            demDuong++;
        }
    }
    if(demAm>demDuong){
        ketQua = " số âm > số dương";
    }else if(demAm<demDuong){
        ketQua = "số âm < số dương";
    }else{
        ketQua = "số âm = số dương";
    }
    document.getElementById("soSanhAmDuong").innerHTML=ketQua;
}