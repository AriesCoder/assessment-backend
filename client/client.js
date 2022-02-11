
document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      })
}

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
            const fortMsg = response.data

            let p = document.createElement('p')
            p.textContent = fortMsg
            document.body.appendChild(p)

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'X'
            deleteBtn.addEventListener('click', deleteMsg)

            p.appendChild(deleteBtn)

    })
}

document.getElementById("valButton").onclick = function () {
    axios.get("http://localhost:4000/api/valentine/")
        .then(function (response) {
            const valMsg = response.data

            let p = document.createElement('p')
            p.textContent = valMsg
            document.body.appendChild(p)

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'X'
            deleteBtn.addEventListener('click', deleteMsg)

            p.appendChild(deleteBtn)

    })
}

document.getElementById("nyButton").onclick = function () {
    axios.get("http://localhost:4000/api/newyear/")
        .then(function (response) {
            const nyMsg = response.data

            let p = document.createElement('p')
            p.textContent = nyMsg
            document.body.appendChild(p)

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'X'
            deleteBtn.addEventListener('click', deleteMsg)

            p.appendChild(deleteBtn)

    })
}

let selectSign = document.getElementById('select-zodiacsigns')
    selectSign.onchange = function (){
        axios.get(`http://localhost:4000/api/zodiac/${selectSign.value}`)
        .then(function (response) {
            const message = response.data

            let p = document.createElement('p')
            p.textContent = message
            document.body.appendChild(p)

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'X'
            deleteBtn.addEventListener('click', deleteMsg)

            p.appendChild(deleteBtn)

    })
} 


const deleteMsg = (event) => {
    event.target.parentNode.remove()
    message.textContent = "Message deleted!"
    
}