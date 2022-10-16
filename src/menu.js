const load = () => {
    const content = document.querySelector('#content');

    content.classList.remove('black-bg');
    content.classList.add('normal-bg');

}

export {load};