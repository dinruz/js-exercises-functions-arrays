// ref

const menu = document.querySelector('#menu');

// add event listener + bonus

menu.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'LI') {
       document.querySelectorAll('#menu li').forEach(item => {
            item.classList.remove('highlight');
        });  
        target.classList.add('highlight');
    }
});



