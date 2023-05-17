var headingElement = document.querySelector("#heading");

headingElement.innerText = 'Sản phẩm nổi bật';

const ulElement = document.querySelector("#list");

(async () => {
    try {
        var listHoa = await axios.get('http://localhost:3000/hoa');
        listHoa = listHoa.data;
        // console.log("listHoa: ", listHoa);
        listHoa.forEach(function (hoa) {
            const liElement = document.createElement('li');

            liElement.innerHTML = `
            <div class="left">
                <a href="#" title=""><img src=${hoa.image} alt=${hoa.image} /></a>
            </div>
            <div class="right">
                <h2><a href="#" title="">${hoa.title}</a></h2>
                <p>${hoa.description}</p>
                <span><a href="#" title="">-Chi tiết-</a></span>
            </div>
            <div class="clr"></div>
        `;

            ulElement.appendChild(liElement);

        });
    } catch (err) {
        console.log('Lỗi ' + err);
        const liElement = document.createElement('li');
        liElement.innerText = 'Xảy ra lỗi khi lấy dữ liệu!';
        liElement.setAttribute('style', 'display: block; color: red; font-style: italic;');
        ulElement.appendChild(liElement);
    }
})()