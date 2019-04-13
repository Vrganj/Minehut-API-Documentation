window.onload = async (e) => {
    const data = await fetch(`https://raw.githubusercontent.com/Vrganj/Minehut-API-Documentation/master/shit.json`).then(res => res.json());
    data.forEach(async card => {
        console.log(card);
        const auth = card.auth ? 'Requires authorization.' : 'Doesn\'t require authorization.'; 

        let res;

        if (card.response) {
            res = await fetch(`https://raw.githubusercontent.com/Vrganj/Minehut-API-Documentation/master/responses/${card.response.file}`).then(res => res.text());
            res = `
            <div class="other response">
                <h2>RESPONSE</h2> <button>Show</button>
                <pre class="code" style="display: none;" data-response="server"></pre>
            </div>
            `;
        }

        const cardDiv = document.createElement('div');

        const desc = card.description.map(d => `
        <div class="other">
            <pre>${d}</pre>
        </div>
        `).join('');

        cardDiv.innerHTML = `

        <div class="card">
            <header>
                <h2>
                    <div class="type">${card.method.toUpperCase()}</div>
                    <code>${card.name}</code>
                </h2>
            </header>
            <div class="card-info">
                <code>${card.endpoint}</code>
            </div>
            ${res || ''}
            ${desc}
            <div class="other">
                <pre>${auth}</pre>
            </div>
        </div>

        `;

        document.getElementById('content').append(cardDiv);

        const el = cardDiv.getElementsByClassName('response')[0];
        if (el != null) el.getElementsByTagName('button')[0].addEventListener('click', async (e) => {
            el.getElementsByClassName('code')[0]
            const rn = el.getElementsByClassName('code')[0].getAttribute('data-response');
            const res = await fetch(`https://raw.githubusercontent.com/Vrganj/Minehut-API-Documentation/master/responses/${rn}.txt`).then(res => res.text());
            el.getElementsByClassName('code')[0].innerText = res;
            el.getElementsByClassName('code')[0].style.display = el.getElementsByClassName('code')[0].style.display === 'none' ? '' : 'none';
        });
    });
}