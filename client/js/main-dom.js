var headingElement = document.querySelector("#heading");

headingElement.innerText = 'Sản phẩm nổi bật';

const ulElement = document.querySelector("#list");

(async () => {
    try {
        var listHoa = await axios.get('http://localhost:3000/hoa');
        listHoa = listHoa.data;
        // console.log("listHoa: ", listHoa);
        var htmls = '';
        listHoa.forEach(function (hoa) {
            htmls += `
            <li>
                <div class="left">
                    <a href="#" title=""><img src="images/${hoa.image}" alt="${hoa.image}" /></a>
                </div>
                <div class="right">
                    <h2><a href="#" title="">${hoa.name}</a></h2>
                    <p>${hoa.description}</p>
                    <span><a href="#" title="">-Chi tiết-</a></span>
                </div>
                <div class="clr"></div>
            </li>
            `;
        })

        console.log(htmls);
        ulElement.innerHTML = htmls;
    } catch (err) {
        console.log('Lỗi ' + err);
        const liElement = document.createElement('li');
        liElement.innerText = 'Xảy ra lỗi khi lấy dữ liệu!';
        liElement.setAttribute('style', 'color: red; font-style: italic;');
        ulElement.appendChild(liElement);
    }
})()