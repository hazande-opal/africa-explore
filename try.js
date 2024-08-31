// const sx = document.querySelector('.sx');
// const sy = document.querySelector('.sy');
// const px = document.querySelector('.px');
// const py = document.querySelector('.py');
// const cx = document.querySelector('.cx');
// const cy = document.querySelector('.cy');

// document.querySelector('.body').addEventListener('mousemove', (event) => {
//     sx.innerText =  event.screenX;
//     sy.innerText = event.screenY;
//     px.innerText = event.pageX;
//     py.innerText = event.pageY;
//     cx.innerText = event.clientX;
//     cy.innerText = event.clientY;
// })

// document.querySelector('.body').addEventListener('keydown', (event) => {
//     console.log(event.key)
// })

// script.js
const hoverArea = document.querySelector('.hover-area');
const floatingText = document.getElementById('floatingText');

hoverArea.addEventListener('mouseover', function() {
    floatingText.style.display = 'block';
});

hoverArea.addEventListener('mousemove', function(event) {
    floatingText.style.left = event.pageX + 5 + 'px';
    floatingText.style.top = event.pageY + 5 + 'px';
});

hoverArea.addEventListener('mouseout', function() {
    floatingText.style.display = 'none';
});