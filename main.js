// Pagina para venta de motocicletas
import { motocicleta } from "./moto.js";
let motos;
let compras = [];
let total = 0;

function core()
{
    SetInitValues();
    let option = 0;
    while(option >= 0)
    {
        option = Number(prompt("Bienvenido a bikers store\n1.- Mostrar catalogo\n2.-Pagar\n3. Agendar una llamada"));
    
        switch(option){
            case 1:
                let compraSeleccionada = ViewCatalog();
                if(compraSeleccionada != "")
                {
                    let indice = motos.findIndex(motocicleta => motocicleta.model === compraSeleccionada);
                    console.log(motos[indice].mostrarDetalles());
                    AddToBag(indice);
                }
                break;
            case 2:
                calcularTotal();
                break;
            default:
                console.log("Opcion no valida");
        }
    }
}

function SetInitValues()
{
    motos = [
        new motocicleta("Bajaj","NS 200","2024","130","25",50000),
        new motocicleta("Bajaj","NS 250","2024","160","35",59000),
        new motocicleta("Yamaha", "YZF-R3", 2022, 180, 14, 5000),
        new motocicleta("Honda", "CBR500R", 2021, 190, 17, 6000),
        new motocicleta("Kawasaki", "Ninja 400", 2023, 200, 15, 6500),
        new motocicleta("Ducati", "Panigale V2", 2022, 250, 16, 15000),
        new motocicleta("Suzuki", "GSX-R600", 2020, 240, 16, 10000),
        new motocicleta("BMW", "S1000RR", 2022, 320, 17, 22000),
        new motocicleta("KTM", "RC 390", 2021, 180, 13, 4000),
        new motocicleta("Yamaha", "MT-07", 2021, 190, 14, 8000),
        new motocicleta("Honda", "CRF1000L", 2022, 180, 18, 13000),
        new motocicleta("Harley-Davidson", "Street Glide", 2022, 180, 22, 23000),
        new motocicleta("Triumph", "Street Triple", 2022, 220, 14, 9500),
        new motocicleta("Indian", "Scout", 2021, 200, 16, 11000),
        new motocicleta("Aprilia", "RSV4", 2022, 300, 18, 21000),
        new motocicleta("Honda", "CBR1000RR", 2022, 310, 17, 16000),
        new motocicleta("Yamaha", "FZ-09", 2021, 200, 14, 7500),
        new motocicleta("Ducati", "Diavel 1260", 2022, 270, 20, 20000),
        new motocicleta("Kawasaki", "Z1000", 2021, 240, 17, 12000),
        new motocicleta("Moto Guzzi", "V85 TT", 2020, 200, 21, 14000),
        new motocicleta("BMW", "R1250GS", 2022, 200, 20, 22000),
        new motocicleta("Suzuki", "V-Strom 650", 2021, 190, 20, 9000)
    ];
}
function calcularTotal()
{
    compras.forEach(compra =>{
        total += compra.price;
    })
    alert(`El total es: ${total}`);
}
function ViewCatalog()
{
    let mensajeFinal = "SELECCIONE EL MODELO PARA AGREGAR AL CARRITO \n";
    motos.forEach((moto,index) => {
        mensajeFinal += `Moto ${index + 1}: ${moto.dealer} ${moto.model} (${moto.year}) - Speed: ${moto.maxSpeed} -> price : ${moto.price}\n`;
    });
    return prompt(mensajeFinal);
}

function AddToBag(indice)
{
    compras.push(motos[indice]);
}

function Pay()
{

}

core();