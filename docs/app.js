//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let C = document.getElementById("C");
crearBarra(C);
let PYTHON = document.getElementById("PYTHON");
crearBarra(PYTHON);
let JAVA = document.getElementById("JAVA");
crearBarra(JAVA);
let SQL = document.getElementById("SQL");
crearBarra(SQL);
let Gestion = document.getElementById("Gestion");
crearBarra(Gestion);
let HTML = document.getElementById("HTML");
crearBarra(HTML);
let JavaS = document.getElementById("JavaS");
crearBarra(JavaS);
let Electronica = document.getElementById("Electronica");
crearBarra(Electronica);


//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalC = setInterval(function(){
            pintarBarra(C, 13, 0, intervalC);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(PYTHON, 14, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(JAVA, 16, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function () {
            pintarBarra(SQL, 15, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(Gestion, 12, 4, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(HTML, 15, 5, intervalIlustrator);
        }, 100);
        const intervalJavaS = setInterval(function () {
            pintarBarra(JavaS, 15, 6, intervalJavaS);
        }, 100);
        const intervalElectronica = setInterval(function () {
            pintarBarra(Electronica, 13, 7, intervalElectronica);
        }, 100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#ffff";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}


// yo  

var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });