const BASE_RAW = "https://raw.githubusercontent.com/Vrganj/Minehut-API-Documentation/master";

window.onload = async (e) => {
    const data = await fetch(`${BASE_RAW}/shit.json`).then(res => res.json());

    data.forEach(async (c) => {
        const auth = c.auth ? "Requires authorization." : "Doesn't require authorization.";

        let res;

        if (c.response) res = `
            <div class="other response">
                <h2>RESPONSE</h2> <button style="font-size: 15px">Show</button>
                <pre class="code" style="display: none;" data-response="${c.response.file}"></pre>
            </div>
        `;
        
        let body;

        if (c.body) body = `
            <div class="other response">
                <pre class="code" style="display: block;" data-response="${c.body}"></pre>
            </div>
        `;
        

        const card = document.createElement("div");

        const desc = c.description.map(d => `
        <div class="other">
            <pre>${d}</pre>
        </div>
        `).join("");

        card.innerHTML = `

        <div class="card">
            <header>
                <h2>
                    <div class="type">${c.method.toUpperCase()}</div>
                    <code>${c.name}</code>
                </h2>
            </header>
            <div class="card-info">
                <code>${c.endpoint}</code>
            </div>
            ${res || ""}
            ${body || ""}
            ${desc}
            <div class="other">
                <pre>${auth}</pre>
            </div>
        </div>

        `;

        document.getElementById("content").append(card);

        const response = card.getElementsByClassName('response')[0];
        const button = response.getElementsByTagName('button')[0];
        const code = el.getElementsByClassName("code")[0];
        const file = code.getAttribute("data-response");
        code.innerText = await fetch(`${BASE_RAW}/responses/${file}`).then(res => res.text());

        if (response != null) button.addEventListener("click", e => code.style.display = code.style.display === "none" ? "" : "none" );
    });
}
