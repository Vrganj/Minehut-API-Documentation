const BASE_RAW = "https://raw.githubusercontent.com/Vrganj/Minehut-API-Documentation/master";

window.onload = async (e) => {
    const data = await fetch(`${BASE_RAW}/shit.json`).then(res => res.json());
    data.forEach(async card => {
        console.log(card);
        const auth = card.auth ? "Requires authorization." : "Doesn't require authorization.";

        let res;

        if (card.response) res = `
            <div class="other response">
                <h2>RESPONSE</h2> <button style="font-size: 15px">Show</button>
                <pre class="code" style="display: none;" data-response="${card.response.file}"></pre>
            </div>
        `;
        

        const cardDiv = document.createElement("div");

        const desc = card.description.map(d => `
        <div class="other">
            <pre>${d}</pre>
        </div>
        `).join("");

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
            ${res || ""}
            ${desc}
            <div class="other">
                <pre>${auth}</pre>
            </div>
        </div>

        `;

        document.getElementById("content").append(cardDiv);

        const el = cardDiv.getElementsByClassName("response")[0];
        const button = el.getElementsByTagName("button")[0];
        if (el != null) button.addEventListener("click", async (e) => {
            const code = el.getElementsByClassName("code")[0];
            const rn = code.getAttribute("data-response");
            const res = await fetch(`${BASE_RAW}/responses/${rn}`).then(res => res.text());
            code.innerText = res;
            code.style.display = code.style.display === "none" ? "" : "none";
        });
    });
}