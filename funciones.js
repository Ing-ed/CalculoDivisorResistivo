
let r1 = document.getElementById("R1");
let r2 = document.getElementById("R2");
let vi = document.getElementById("Vi");
let vo = document.getElementById("Vo");
// window.alert(r1);
document.getElementById("calcular").addEventListener("click",()=>{
    if(r1.value == ""){
        if(r2.value == "" || vi.value == "" || vo.value == ""){
            window.alert("Rellene al menos 3 campos");
        } else if(vi.value*1 < vo.value*1){
            window.alert("La tension de salida nunca puede ser mayor que la de entrada");
        } else {
            let valor = vo.value*r2.value;
            valor /= (vi.value -vo.value);
            r1.value = valor;
            window.alert(valor);
        }
    } else if (r2.value == ""){
        if(r1.value == "" || vi.value == "" || vo.value == ""){
            window.alert("Rellene al menos 3 campos");
        } else if(vi.value*1 < vo.value*1){
            window.alert("La tension de salida nunca puede ser mayor que la de entrada");
        } else {
            let valor = vi.value*r1.value - vo.value*r2.value;
            valor /= vo.value;
            r2.value = valor;
            window.alert(valor);
        }
    } else if(vi.value == ""){
        if(r1.value == "" || r2.value == "" || vo.value == ""){
            window.alert("Rellene al menos 3 campos");
        } else {
            let valor = vo.value*r1.value + vo.value*r2.value;
            valor /= r1.value;
            vi.value = valor;
            window.alert(valor);
        }
    } else if(vo.value == ""){
        if(r1.value == "" || r2.value == "" || vi.value == ""){
            window.alert("Rellene al menos 3 campos");
        } else {
            let valor = r1.value*vi.value;
            valor /= (r1.value*1 + r2.value*1);
            // valor /= (r1.value + r2.value);
            vo.value = valor;
            window.alert(valor);
        }
    } else {
        window.alert("Por favor, rellene al menos 3 campos");
    }
});