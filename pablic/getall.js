// const btn = document.createElement('div');
// btn.innerText = 'delete';
// btn.classList.add('her');
// document.body.append(btn);
// document.body.append(btn);
const getall = document.querySelector('.btngetall');
const posts = document.querySelector('.posts');
getall.addEventListener('click', async  (e) => {
    e.preventDefault();
    let content = await axios.get('/getmeall');
    let render = content.data;
    
    
    console.log(content.data[0]._id)
    
    for (key in render) {}

    
    for (key in render) {
        posts.innerHTML += `
        <li class="post">
        <h1>${render[key].title}</h1>
        <h3>${render[key].text}</h3>
        ${btn}
        </li>
        `
    }

});


// <div class="delete" data_id="${render[key]._id}">delete</div>
