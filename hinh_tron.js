function hinh_tron() {
    let pi=3.14;
    let Radius;
    let area;
    let circuit;
    Radius=parseInt(prompt('Input Radius'));
    area=pi*Radius*Radius;
    circuit=2*Radius*pi;
    alert('Area= '+area);
    alert('Circuit= '+circuit);
}