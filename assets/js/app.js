document.addEventListener('DOMContentLoaded',()=>{
    const swictherTheme = document.querySelector('.nav__check');
    const sun = document.querySelector('.nav__icon-sun');
    const moon = document.querySelector('.nav__icon-moon');
    const root = document.documentElement;

    if(root.getAttribute('data-theme') === 'dark'){
        swictherTheme.checked = true;
        moon.src="./assets/img/Moon_fill.svg";
        moon.classList.toggle('active-moon');
        sun.src="./assets/img/Sun_fill_light.svg";
        sun.classList.toggle('active-sun');
    }

    swictherTheme.addEventListener('click', toggleTheme);

    function toggleTheme(){
        // const setTheme = swictherTheme.checked ? 'dark' : 'light';
        if(swictherTheme.checked){
            const setTheme = 'dark';
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