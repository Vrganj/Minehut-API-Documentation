window.onload = (e) => {
    const elements = document.getElementsByClassName('card');

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i].getElementsByClassName('response')[0];
        if (el != null) el.getElementsByTagName('button')[0].addEventListener('click', async (e) => {
            el.getElementsByClassName('code')[0]
            const rn = el.getElementsByClassName('code')[0].getAttribute('data-response');
            const res = await fetch(`https://raw.githubusercontent.com/Vrganj/Minehut-API-Documentation/master/responses/${rn}.txt`).then(res => res.text());
            el.getElementsByClassName('code')[0].innerText = res;
            el.getElementsByClassName('code')[0].style.display = el.getElementsByClassName('code')[0].style.display === 'none' ? '' : 'none';
        })
    }
}