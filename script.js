let data = [];
axios.get('http://localhost:3000/contact')
    .then(response => {
        console.log(response);
        const listHTML = document.querySelector("#contacts>ol")
        data = response.data;

        response.data.forEach(item => {
            const {name, age, id } = item;
            const itemHTML = `<li> 
           Name : ${name}
           <br>
           Age : ${age} Year
            <a href="./detail.html?id=${id}">detail</a>
            <button onclick="ubah(${id})">edit</button>
            <button onclick="hapus(${id})">hapus</button>
           </li>`
            listHTML.innerHTML += itemHTML
        });
    })
    .catch((pesanError) => {
        console.error(pesanError);
    })
document.getElementById('simpanContact').addEventListener('click', function (event) {
    // event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const age = document.getElementsByName('age')[0].value;

    axios.post('http://localhost:3000/contact', {
            name,
            age
        })
        // .then(response => {
        //     console.log(response);
        //     window.alert('berhasil merubah data');

        // })
        // .catch(pesanError => {
        //     console.error(pesanError)
        // })

});

const hapus = id => {
    axios.delete(`http://localhost:3000/contact/${id}`)
}

const ubah = id => {
    const contact = data.find(item => {
        return item.id === id
    })
    if (contact) {
        const name = window.prompt('Name',contact.name);
        const age = window.prompt('Age', contact.age);
        axios.put(`http://localhost:3000/contact/${id}`, {
            name,
            age
        });
    }
}