let btn = document.getElementById("shorten");

btn.addEventListener('click', async function() {
    let long = document.getElementById("longurl").value;
    let accessToken = '9e5ab2d7e10b1c76256f0efda19cc2ee80241805'; 
    let shorturl = document.getElementById("shorturl");
        const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                long_url: long
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        shorturl.value = data.link;
});

new WOW().init();
