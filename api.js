// async await function
//fetch 
// endpoint the link we use to fetch the api



// setTimeout(() => {
//     console.log('asc');

// }, 0);
// console.log('asc');

// Asynchronous programming allows tasks to execute independently of one another, enabling concurrent execution and improved performance.
// Synchronous programming, also known as blocking or sequential programming, executes the tasks in a predetermined order, where each operation waits for the previous one to complete before proceeding. 
// const container = document.getElementById('container')
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
// const fetchData = async () => {
//     const res = await fetch(apiUrl);
//     const data = await res.json();
//     console.log(data);
//     const div = document.createElement('div')
//     data.map((item) => {
//         div.innerHTML += `<p>${item.id}</p>
//         <p>${item.userId}</p>
//         <p>${item.title}</p>
//         <p>${item.body}</p> <hr>`;
//     })

//     container.appendChild(div);

// }
// fetchData()

// fetch data for users from /users end point using jsonplaceholder api 

// REST API 
// http request 
// request to question to server 
// response answer from the server
// CRUD application C-create, R-read, U-update D-delete
// POST request- saves data to the server, save one or more data 
// GET request- get data from the server, gets one or more data 
// UPDATE - edits data in the server, edits one or more
// DELETE - removes data from the server, deletes one or more

// status code 
// 2XX-Success
// 3XX-redirect
// 4XX - Client error 
// 5XX - Server error

//https://jsonplaceholder.typicode.com/posts/:id
const url='https://jsonplaceholder.typicode.com/users'
const json=document.getElementById('json')
const api=async() =>{
     const get= await fetch (url);
     const data= await get.json();
     console.log(data);
     const div=document.createElement('div')
    data.map((item) => {
        div.innerHTML += `<p>${item.address.street}</p>
        <p>${item.company.name}</p>
        <p>${item.email}</p>
        <p>${item.id}</p> 
        <p>${item.name}</p> 
        <p>${item.phone}</p> 
        <p>${item.username}</p> 
        <p>${item.website}</p> 
        <hr>`;
    })

json.appendChild(div)
}
api()
