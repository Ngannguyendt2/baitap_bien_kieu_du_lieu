function diem_mon_hoc(){
    let Physical;
    let Chemistry;
    let Biological;
    let Total;
    let Average;
    Physical=parseInt(prompt("Nhap diem vat ly"));
    Chemistry=parseInt(prompt("Nhap diem hoa hoc"));
    Biological=parseInt(prompt("Nhap diem sinh hoc"));
    Total=Physical+Chemistry+Biological;
    Average=Total/3;
    alert('Total= '+Total);

    alert('Average= '+Average);
}
