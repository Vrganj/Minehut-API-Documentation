window.onload = (e) => {
    const elements = document.getElementsByClassName('card');

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i].getElementsByClassName('response')[0];
        if (el != null) el.getElementsByTagName('button')[0].addEventListener('click', async (e) => {
            el.getElementsByClassName('code')[0]
            const rn = el.getElementsByClassName('code')[0].getAttribute('data-response');
            const res = await fetch(`https://vrganj.github.io/Minehut-API-Documentation/responses/${rn}.txt`).then(res => res.text());
            console.log(res);
            el.getElementsByClassName('code')[0].style.display = el.getElementsByClassName('code')[0].style.display === 'none' ? '' : 'none';
        })
    }
}