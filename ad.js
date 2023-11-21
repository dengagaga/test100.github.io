const btnOpen = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const modalBox = document.querySelector('.modal_box')
btnOpen.addEventListener('click', () => {
    modal.classList.add('open')
})
modalBox.addEventListener('click', (event) => {
    event._isClickWithInModal = true
})

modal.addEventListener('click', (event) => {
    event._isClickWithInModal = false
    console.log(event);
    if (event._isClickWithInModal) return
    event.target.classList.remove('open')


})




// document.addEventListener('click', (e) => {
//     const click =  e.composedPath().includes(modal)
//     if(!click) {
//         modal.classList.remove('open')
//     }
// })