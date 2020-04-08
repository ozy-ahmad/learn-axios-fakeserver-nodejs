
const id = window.location.href.replace('https://127.0.0.1:5500/detail.html?id=','')

axios.get(`http://localhost:3000/contact/${id}`)
    .then (response => {
        console.log(response);
        const {name, age} = response.data
        document.getElementById('contactDetails').innerHTML = `
        name: ${name}
        <br>
        age: ${age}
        <a href="./">Kembali</a>
        `;
        
    })