// aca atrapamos todos lo botones que tengan pues la clase pregunt

const preguntas = document.querySelectorAll('.pregunta'); // querySelectorAll lo usamos porque tememos que atrapar o traer varios elementos de html que tengan esa clase y no los agrupa en una lista

// mostarmos en la consola lo que atrapamos

//recoremos la lista boton por boton 
preguntas.forEach(boton => { // forEach literalmente significa por cada uno es como un bucle para que le aplique estas condisiones uno por uno 
    
    
    boton.addEventListener('click', () => { // con esto lo que  es a cada boton agregar un evento de clik
                                                
     const respuesta = boton.nextElementSibling; // con esto encontramos la respuesta a la pregunta que esta debajo
                                                 //nextElementSibling significa el siguiente elemento hermano(en html el div de respuesta esta debajo de su button)




preguntas.forEach(otroBoton => { // nuevamente volvemos a recorrer todos los botones
    if (otroBoton !== boton){ // si el otro boton que estamos revisando no es el mismo al que le hisimos click
        otroBoton.nextElementSibling.classList.remove('mostrar'); //le quitamos la clase 'mostrar' a la respuesta del otro boton 

    }

});


            respuesta.classList.toggle('mostrar'); // con esto usamos el interuptor automatico para mostrar o ocultarla
    });
});


