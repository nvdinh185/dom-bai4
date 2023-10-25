var listHoa = [
    {
        id: 1,
        name: 'Hoa thủy tiên',
        image: 'ThuyTien_01.jpg',
        description: `Những bát hoa thủy tiên đẹp chưng trong nhà ngày Tết vốn là thú chơi tao nhã, thanh lịch, hào hoa
        của người Hà Nội xưa`
    },
    {
        id: 2,
        name: 'Hoa Violet',
        image: 'hoaviolet2.jpg',
        description: `Hoa phi yến còn có tên hoa chân chim vì hoa trông giống như chân con chim hoặc phi yến (chim yến
            đang bay) hay violet vì hoa màu tím và còn có tên La-let hay đông thảo thuộc họ Mao lương (Ranuncolaceae) thực chất cũng
            có cây cho hoa màu hồng và trắng xong rất ít.`
    },
    {
        id: 3,
        name: 'Hoa Lilies',
        image: 'hoalili.PNG',
        description: `Những giọt nước mắt nào có giúp được gì! Giắc sẽ phải lên đường chinh chiến ở một xứ xa lạ, đành
        bỏ lại Lilia, người vợ chưa cưới của mình trên đất Pháp. Lúc chia tay, Giắc rút trái tim ra khỏi
        lồng ngực mình, trao cho Lilia và nói`
    },
    {
        id: 4,
        name: 'Hoa lài',
        image: 'hoalai.jpg',
        description: `Mùi hương thoảng thoảng như cứ đeo đẳng theo chúng ta mọi nơi lại phát ra từ những bông hoa trắng
        nhỏ xíu, mong manh.`
    },
    {
        id: 5,
        name: 'Hoa phong lan',
        image: 'hoaphonglan.jpg',
        description: `Nếu không có ảnh hậu trường, khó ai hình dung được chiêu thức chụp bức ảnh hoa lan này.
        Nhiều dân mạng đã đặt tên cho tác phẩm này là: "Tôi đã thấy hoa vàng trên quần đen".
        Người ta hay bảo chỉ có giới trẻ mới tiếp cận được những "tinh hoa" của công nghệ chỉnh sửa ảnh
        lung linh ảo diệu thời hiện đại.`
    },
]

var headingElement = $("#heading");

headingElement.text('Sản phẩm nổi bật');

const ulElement = $("#list");

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

ulElement.html(htmls);
