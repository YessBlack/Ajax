//PASOS PARA TRABAJAR APIS CON HTTP REQUEST
/*
(() => {
    //1 - Instanciar XMLHttpRequest
    const xhr = new XMLHttpRequest()
    const API = 'https://jsonplaceholder.typicode.com/users'
    const $xhr = document.getElementById('xhr')
    const $fragment = document.createDocumentFragment()
    
    //2 - Escuchar mediante el evento readystatechange
    xhr.addEventListener('readystatechange',e => {
        //Validar que el status=200 y el readyState=4 --> peticion completada
        //Una vez completado sea hace una manipulacion en el DOM

        if(xhr.readyState !== 4) return
        console.log(xhr)

        if(xhr.status >= 200 && xhr.status < 300) {
            //Respuesta de la API se obtiene con responseText
            //Se convierte a JSON
            const data = JSON.parse(xhr.responseText)
            
            //Se recorre la informacion 

            data.forEach(el => {
                //Se imprimen en pantalla
                const $li = document.createElement('li')
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            }); 
            $xhr.appendChild($fragment)
        }else {
            const message = xhr.statusText || 'Ocurrio un error'
            $xhr.innerHTML = `Error ${xhr.status} : ${message}`
        }


    })

    //3 - open
    xhr.open('GET', API)

    //4 - send
    xhr.send()
})()
*/

//API Fetch

/*
(() => {
    const $fetch = document.getElementById('fetch')
    const $fragment = document.createDocumentFragment()

    const API = 'https://jsonplaceholder.typicode.com/users'

    //USAR FETCH --> recibe URL de la API
    fetch(API)
    //solicita la respuesta y la returna en formato JSON --> existen otros formatos
    .then(response => response.ok ? response.json() : Promise.reject(response))
    //En este then se recibe la informacion en JSON
    .then(data => {
        //Se recorre la informacion 
        data.forEach(el => {
            //Se imprimen en pantalla
            const $li = document.createElement('li')
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
            $fragment.appendChild($li)
        }); 
        $fetch.appendChild($fragment)
    })
    .catch(error => {
        const message = error.statusText || 'Ocurrio un error'
        $fetch.innerHTML = `Error ${error.status} : ${message}`
    })
})()

*/

(() => {
    const $fetch = document.getElementById('fetch')
    const $fragment = document.createDocumentFragment()

    const API = 'https://jsonplaceholder.typicode.com/users'

    async function getData(){
        try{
            let response = await fetch(API)
            let data = await response.json()

            if(!response.ok) throw {status:response.status,statusText:response.statusText}
            //Se recorre la informacion 
            data.forEach(el => {
                //Se imprimen en pantalla
                const $li = document.createElement('li')
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            }); 
            $fetch.appendChild($fragment)

        }catch(err){
            console.log(err.status)
            const message = err.statusText || 'Ocurrio un error'
            $fetch.innerHTML = `Error ${err.status} : ${message}`
        }
    }
    getData()
})()