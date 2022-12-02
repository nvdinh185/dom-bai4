var headingElement = document.querySelector("#heading");

headingElement.innerText = 'Sản phẩm nổi bật';

const ulElement = document.querySelector("#list");

const listHoa = [
    {
        id: 1,
        img: 'images/ThuyTien_01.jpg',
        title: 'Hoa thủy tiên',
        description: `Những bát hoa thủy tiên đẹp chưng trong nhà ngày Tết vốn là thú chơi tao nhã, 
        thanh lịch, hào hoa của người Hà Nội xưa`
    },
    {
        id: 2,
        img: 'images/hoaviolet2.jpg',
        title: 'Hoa Violet',
        description: `Hoa phi yến còn có tên hoa chân chim vì hoa trông giống như chân con chim 
        hoặc phi yến (chim yến đang bay) hay violet vì hoa màu tím và còn có tên La-let
        hay đông thảo thuộc họ Mao lương (Ranuncolaceae) thực chất cũng có cây cho
        hoa màu hồng và trắng song rất ít.`
    },
    {
        id: 3,
        img: 'images/hoalili.PNG',
        title: 'Hoa Lilies',
        description: `Những giọt nước mắt nào có giúp được gì! Giắc sẽ phải lên đường chinh chiến
        ở một xứ xa lạ, đành bỏ lại Lilia, người vợ chưa cưới của mình trên đất Pháp.
        Lúc chia tay, Giắc rút trái tim ra khỏi lồng ngực mình, trao cho Lilia và nói`
    },
    {
        id: 4,
        img: 'images/hoalai.jpg',
        title: 'Hoa lài',
        description: `Mùi hương thoảng thoảng như cứ đeo đẳng theo chúng ta mọi nơi lại phát ra từ
        những bông hoa trắng nhỏ xíu, mong manh.`
    },
    {
        id: 5,
        img: 'images/ThuyTien_01.jpg',
        title: 'Hoa phong lan',
        description: `Nếu không có ảnh hậu trường, khó ai hình dung được chiêu thức chụp bức ảnh
        hoa lan này. Nhiều dân mạng đã đặt tên cho tác phẩm này là: "Tôi đã thấy hoa
        vàng trên quần đen". Người ta hay bảo chỉ có giới trẻ mới tiếp cận được những
        "tinh hoa" của công nghệ chỉnh sửa ảnh lung linh ảo diệu thời hiện đại.
        `
    }
];

(async () => {
    let listHoa = await axiosClient.get('/hoa/listhoa');
    listHoa = listHoa.data;
    console.log("listHoa: ", listHoa);
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