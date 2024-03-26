document.addEventListener('DOMContentLoaded',()=>{
    const swictherTheme = document.querySelector('.nav__check');
    const sun = document.querySelector('.nav__icon-sun');
    const moon = document.querySelector('.nav__icon-moon');
    const logo = document.querySelector('.logo');
    const root = document.documentElement;

    if(root.getAttribute('data-theme') === 'dark'){
        swictherTheme.checked = true;
        moon.src="./assets/img/Moon_fill.svg";
        moon.classList.toggle('active-moon');
        sun.src="./assets/img/Sun_fill_light.svg";
        sun.classList.toggle('active-sun');
        logo.src="./assets/img/alarado-icon-homepage-light.svg"
    }

    swictherTheme.addEventListener('click', toggleTheme);

    function toggleTheme(){
        // const setTheme = swictherTheme.checked ? 'dark' : 'light';
        if(swictherTheme.checked){
            const setTheme = 'dark';
            logo.src="./assets/img/alarado-icon-homepage-light.svg"
            // Cambio Imagen Luna
            moon.src="./assets/img/Moon_fill.svg";
            moon.classList.toggle('active-moon')
            // Cambio Imagen Sol
            sun.src="./assets/img/Sun_fill_light.svg"
            sun.classList.toggle('active-sun');
            root.setAttribute('data-theme',setTheme);
            localStorage.setItem('theme',setTheme)
        }else{
            setTheme = 'light';
            // Cambio Imagen Luna
            logo.src="./assets/img/alarado-icon-homepage.svg"
            moon.src="./assets/img/Moon_fill_light.svg";
            moon.classList.toggle('active-moon')
            // Cambio Imagen Sol
            sun.src="./assets/img/Sun_fill.svg";
            sun.classList.toggle('active-sun');
            root.setAttribute('data-theme',setTheme);
            localStorage.setItem('theme',setTheme)
        }
        
    }
})