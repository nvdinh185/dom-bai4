var headingElement = document.querySelector("#heading");

headingElement.innerText = 'Sản phẩm nổi bật';

const ulElement = document.querySelector("#list");

(async () => {
    let listHoa = await axiosClient.get('/hoa/listhoa');
    listHoa = listHoa.data;
    // console.log("listHoa: ", listHoa);
    listHoa.forEach(function (hoa) {
        const liElement = document.createElement('li');

        const divLeftElement = document.createElement('div');
        divLeftElement.className = 'left';
        const aLeftElement = document.createElement('a');
        aLeftElement.href = '#';
        const imgLeftElement = document.createElement('img');
        imgLeftElement.src = hoa.image;
        imgLeftElement.alt = hoa.image;
        aLeftElement.appendChild(imgLeftElement);
        divLeftElement.appendChild(aLeftElement);
        liElement.appendChild(divLeftElement);

        const divRightElement = document.createElement('div');
        divRightElement.className = 'right';

        const h2Element = document.createElement('h2');
        const aRightElement = document.createElement('a');
        aRightElement.href = '#';
        aRightElement.innerText = hoa.title;
        h2Element.appendChild(aRightElement);
        divRightElement.appendChild(h2Element);

        const pElement = document.createElement('p');
        pElement.innerText = hoa.description;
        divRightElement.appendChild(pElement);

        const spanElement = document.createElement('span');
        const aSpanElement = document.createElement('a');
        aSpanElement.href = '#';
        aSpanElement.innerText = '-Chi tiết-';
        spanElement.appendChild(aSpanElement);
        divRightElement.appendChild(spanElement);
        liElement.appendChild(divRightElement);

        const divClrElement = document.createElement('div');
        divClrElement.className = 'clr';
        liElement.appendChild(divClrElement);

        ulElement.appendChild(liElement);

    });
})()