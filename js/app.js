window.onload = () => {
    const content = $('#content').get(0);

    documentation.forEach((endpoint, index) => {
        content.innerHTML += `
            <div class="card mb-3">
                <div class="card-header bg-darky">
                    <span class="type">${endpoint.method}</span>
                    <span>${endpoint.name}</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a href="${endpoint.endpoint}" target="_blank">${endpoint.endpoint}</a>
                        <i class="material-icons copy align-middle float-right" onclick="copy(this)">file_copy</i>
                    </li>
                    <li class="list-group-item">${endpoint.description}</li>
                    <li class="list-group-item">
                        <p class="mb-0">Required headers:</p>
                        <ul>
                            <li><code>Content-Type</code></li>
                            <li style="display: ${
                                endpoint.auth ? '' :
                                'none'}"><code>Authorization</code></li>
                            <li style="display: ${
                                endpoint.auth ? '' :
                                'none'}"><code>x-session-id</code></li>
                        </ul>
                    </li>
                </ul>
            </div>
        `;
    });
};

function copy (event) {
    const url = event.parentElement.getElementsByTagName('a')[0].href;
    window.prompt('Copy', url);
}

function filter () {
    const endpoints = [
        ...$('#content').get(0).getElementsByClassName('card'),
    ];
    const filter = $('#search').get(0).value;
    endpoints.forEach(
        (e) =>
            (e.style.display =

                    e.innerText.indexOf(filter) > -1 ? '' :
                    'none'),
    );

    $('#no-results').get(0).style.display =

            endpoints.filter((e) => e.innerText.indexOf(filter) > -1).length >
            0 ? 'none' :
            '';
}
