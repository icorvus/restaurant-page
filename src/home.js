const load = () => {
    const home = document.createElement('div');
    const header = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    home.classList.add('home');
    home.classList.add('tab')
    header.textContent = 'STEAKHOUSE IN WARSAW';
    p1.innerHTML = '<strong>Meatiest</strong> and <strong>Tastiest</strong>.';
    p2.innerHTML = 'The <span class="significant">Experience</span> you won\'t forget.'
    
    home.appendChild(header);
    home.appendChild(p1);
    home.appendChild(p2);
    content.appendChild(home)
}

export {load};