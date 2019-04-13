window.onload = (e) => {
    const elements = document.getElementsByClassName('card');

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i].getElementsByClassName('response')[0];
        if (el != null) el.getElementsByTagName('button')[0].addEventListener('click', (e) => {
            el.getElementsByClassName('code')[0].style.display = el.getElementsByClassName('code')[0].style.display === 'none' ? '' : 'none';
        })
    }
}