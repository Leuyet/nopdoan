function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get(param)
}

$(document).ready(function () {
    var productId = getParam('productId')
    $.ajax({
        url: 'http://localhost/api/products/show.php?productId=' + productId,
        type: 'GET',
        success: function (data) {
            var product = JSON.parse(data)
            renderProductUI(product)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
})


// showAllProducts
function renderProductUI(product) {
    $('#product-list').append(
        `
            <div class="col-md-3 py-3">
            <div class="card">
            <img src="./public/images/p6.png" alt="">
            <div class="card-body">
                <h3 class="text-center">${product.name}</h3>
                <p class="text-center">Sản phẩm mới cập nhật.</p>
                <div class="star text-center">
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                <i class="fa-solid fa-star checked"></i>
                </div>
                <h2>$${product.price} <span>
                    <li class="fa-solid fa-cart-shopping"></li>
                </span></h2>
            </div>
            </div>
        </div>
        `
    )
}