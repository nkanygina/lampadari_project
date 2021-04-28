function toggleClass() {
    const element = document.getElementsByClassName('banner__overflow')[0];
    element.classList.toggle('banner__overflow--hidden')
}
function openModal() {
    document.getElementById("myModal").style.display = "block"
}

function closeModal() {
    document.getElementById("myModal").style.display = "none"
}