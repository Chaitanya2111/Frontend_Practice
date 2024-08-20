window.addEventListener('mouseover', () => {
    const elements = document.getElementById('root').style.color = 'red';
});





window.addEventListener('mouseover', () => {
    const elements = document.getElementsByClassName('blue-white');

    
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.color = 'white';
                elements[i].style.background = 'blue';

            }
        });



    



window.addEventListener('mouseover', () => {
    const elements = document.getElementsByTagName('p');

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = '50px';

    }
});

