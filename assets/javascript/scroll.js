const efecto = ScrollReveal(); 

 efecto.reveal('.navbar',{
     duration: 3000,
     delay: 300,
     origin: 'bottom'
 });

const efectoTop = clase =>{
    efecto.reveal(clase,{
        duration: 3000,
        origin: 'top',
        distance: '300px'
    })
}

const efectoRight = clase => {
    efecto.reveal(clase,{
        duration: 3000,
        origin: 'right',
        distance: '300px'
    })
}

efectoTop('.logos-top');
efectoRight('.info-right');
