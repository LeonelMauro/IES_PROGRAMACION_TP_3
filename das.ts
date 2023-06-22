// ejercicio 1
// crear una clase abstracta llamada Animal y dos clases hijas llamadas Perro y Gato que extiendan la clase Animal.
// Cada una de las clases hijas debe implementar el método hacerSonido() de forma diferente.
abstract class Animal{
    nombre : string;
    especie : string;
    edad : number;
    color:string;

    constructor(nombre:string, especie:string, edad:number, color:string){
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    };
    abstract hacersonid(sonido:string): void;
};

class Perro extends Animal{
    constructor(nombre:string, especie:string, edad:number, color:string){
        super(nombre,especie,edad,color,)
    }
    hacersonid(sonido:String):void{
    console.log('El Perro ladra y su sonido es ',sonido)
}

};

class Gato extends Animal{
    constructor(nombre:string, especie:string, edad:number, color:string){
        super(nombre,especie,edad,color,)
    };
    hacersonid(sonido: string): void {
        console.log("El gato maullea y su sonido es ",sonido)
    }
}

const Bobi = new Perro ('Bobi','Caninno',2,'Negro')
Bobi.hacersonid('Gua Gua.!!')

const Felipe = new Gato ('Felipe','Felino',1,'Blanco')
Felipe.hacersonid('Miau miau.!')

// ejercicio 2 Crear una clase y una interfaz para representar una lista de tareas 
// crea una clase llamada ListaTareas que tenga un arreglo privado de tareas (tareas) y los siguientes métodos:
// agregarTarea(tarea: Tarea): void: Agrega una nueva tarea al arreglo tareas.
// marcarTareaCompleta(id: number): void: Marca una tarea como completada, buscándola por su id y actualizando el valor de la propiedad completada a true.
// listarTareas(): void: Muestra por consola la lista de tareas, incluyendo su id, descripción y estado de completado
interface Itarea{
    id : number;
    descripcion :string;
    estado :boolean;
}

class ListaTareas {
    private tareas : Itarea [];
                                    
    constructor(){
        this.tareas = [];
    }
    agregarTarea(tarea : Itarea):void{
        this.tareas.push(tarea)
    }

    tareaCompletada(id : number){
       for (let i = 0; i < this.tareas.length ; i++){
        if (this.tareas [i].id === id){
            this.tareas[i].estado = true;
            break
        }
    }
    }
    listarTareas():void{
        console.log ("Lista de tareas");
        for (let i = 0 ; i < this.tareas.length; i++){
            console.log ('id :',this.tareas[i].id, 'Descripcion ',this.tareas[i].descripcion, 'Estado de tarea', this.tareas[i].estado)
        }
    }

}   

const tareas = new ListaTareas();
tareas.agregarTarea({id :1 ,descripcion : "Relizar practico",estado: false});
tareas.agregarTarea({id :2 ,descripcion : "Estudiar para examen",estado: false});
tareas.agregarTarea({id :3 ,descripcion : "Hacer ejercicio",estado: false});

tareas.listarTareas();

tareas.tareaCompletada(3)
