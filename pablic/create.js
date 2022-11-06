let form = document.querySelector('.testForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let elem = e.target


    let formdata = {
        title: elem.querySelector('.title').value,
        text: elem.querySelector('.text').value,
        imageUrl: elem.querySelector('.imageUrl').value,
    };

    await axios.post('/post', {
        'title': formdata.title,
        'text': formdata.text,
        'imageUrl': formdata.imageUrl,
    });
});


