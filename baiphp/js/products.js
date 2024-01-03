/**
 * Home Page
 */
//
$(document).ready(function () {
    getAllProducts();
})

// showAllProducts
function renderProductListUI(productList) {
    productList.forEach(product => {
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
    });
}


// show Hot Products
function renderHotProducts(productList) {
    productList.forEach(product => {
        $('#product-hot').append(
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
    });
}

function getAllProducts() {
    $.ajax({
        url: 'http://localhost/api/products/index.php',
        type: 'GET',
        success: function (data) {
            var productList = JSON.parse(data)
            renderProductListUI(productList)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}

function getHotProducts() {
    $.ajax({
        url: 'http://localhost/api/products/hot.php',
        type: 'GET',
        success: function (data) {
            var productList = JSON.parse(data)
            renderProductListUI(productList)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}



// show new products