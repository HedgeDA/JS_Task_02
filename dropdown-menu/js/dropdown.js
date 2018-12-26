const wrapper_dropdown = document.getElementsByClassName('wrapper-dropdown')[0];

function Dropdown() {
    wrapper_dropdown.addEventListener('click', () => wrapper_dropdown.classList.toggle('active'))
}

Dropdown();