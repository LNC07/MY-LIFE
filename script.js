document.getElementById("loveButton").addEventListener("click", function() {
    let count = 0;
    const lovePage = window.open("", "", "width=600,height=600");

    lovePage.document.write(`
        <html>
        <head>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #ffe6e6;
                    font-family: Arial, sans-serif;
                }
                .love-counter {
                    position: relative;
                    width: 200px;
                    height: 180px;
                    background-color: red;
                    transform: rotate(-45deg);
                    margin: 50px;
                    color: #fff;
                    text-align: center;
                    font-size: 20px;
                }
                .love-counter::before,
                .love-counter::after {
                    content: "";
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    background-color: red;
                    border-radius: 50%;
                }
                .love-counter::before {
                    top: -100px;
                    left: 0;
                }
                .love-counter::after {
                    left: 100px;
                    top: 0;
                }
                p {
                    position: absolute;
                    top: 70px;
                    left: 40px;
                    transform: rotate(45deg);
                }
            </style>
        </head>
        <body>
            <div class="love-counter">
                <p id="loveText">Ami Tomay Unlimited Valobashi Ela</p>
            </div>
            <script>
                setInterval(() => {
                    count++;
                    document.getElementById("loveText").innerText = "Ami Tomay Unlimited Valobashi Ela: " + count;
                }, 100);
            </script>
        </body>
        </html>
    `);
});
