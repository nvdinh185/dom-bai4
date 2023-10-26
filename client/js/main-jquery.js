var headingElement = $("#heading");

headingElement.text('Sản phẩm nổi bật');

const ulElement = $("#list");

(async () => {
    try {
        var listHoa = await axios.get('http://localhost:3000/hoa');
        listHoa = listHoa.data;
        // console.log("listHoa: ", listHoa);
        var htmls = '';
        listHoa.forEach(function (hoa) {
            htmls += `<li>
                <div class="left">
                    <a href="#" title=""><img src="images/${hoa.image}" alt="${hoa.image}" /></a>
                </div>
                <div class="right">
                    <h2><a href="#" title="">${hoa.name}</a></h2>
                    <p>${hoa.description}</p>
                    <span><a href="#" title="">-Chi tiết-</a></span>
                </div>
                <div class="clr"></div>
            </li>`;
        })

        ulElement.html(htmls);
    } catch (err) {
        console.log('Lỗi ' + err);
        const liElement = $('<li>');
        liElement.text('Xảy ra lỗi khi lấy dữ liệu!');
        liElement.attr('style', 'display: block; color: red; font-style: italic;');
        ulElement.append(liElement);
    }
})()