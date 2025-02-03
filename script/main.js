function initMap() {
    var russia = { lat: 3.51602, lng: -2.1969 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 20, center: russia });
    var marker = new google.maps.Marker({ position: russia, map: map });
}


var MenuItems = document.getElementById("menu-items");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0"){
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

var col4s = document.querySelectorAll(".col-4");

col4s.forEach(function(col4){
    col4.addEventListener("click", function(){
        var img = this.querySelector('img');
        var desc = this.getAttribute("desc");

        var modal = document.createElement('div');
        modal.id = 'myModal';
        modal.style.display = 'block';
        modal.style.position = 'fixed';
        modal.style.zIndex = '1';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.overflow = 'hidden';
        modal.style.backgroundColor = 'rgba(0,0,0,0.4)';

        var modalContent = document.createElement('div');
        modalContent.style.display = 'grid';
        modalContent.style.gridTemplateColumns = '1fr 1fr 1fr';
        modalContent.style.position = 'relative';
        modalContent.style.backgroundColor = '#fefefe';
        modalContent.style.margin = '10% auto';
        modalContent.style.padding = '20px';
        modalContent.style.border = '1px solid #888';
        modalContent.style.width = '80%';
        modalContent.style.height = '550px';
        modalContent.style.borderRadius = '10px';
        modalContent.className = 'modal-content';

        var imageContainer = document.createElement('span');
        imageContainer.className = 'image-container';
        imageContainer.style.display = 'inline';
        imageContainer.style.vericalAlign = 'middle';
        imageContainer.style.maxWidth = 'fit-content';
        modalContent.appendChild(imageContainer);

        var modalImg = document.createElement('img');
        modalImg.id = 'modalImg';
        modalImg.src = img.src;
        modalImg.style.maxHeight = '500px';
        modalImg.style.maxWidth = '500px';
        imageContainer.appendChild(modalImg);

        var modalDesc = document.createElement('span');
        modalDesc.id = 'modalDesc';
        modalContent.appendChild(modalDesc);

        var title = document.createElement('h2');
        title.id = 'item-title';
        title.style.padding = '10px';
        title.innerHTML = this.querySelector('h5').innerHTML;
        modalDesc.appendChild(title);

        var descContent = document.createElement('p');
        descContent.id = 'item-desc';
        descContent.style.padding = '10px';
        descContent.style.color = 'black';
        descContent.innerHTML = desc;
        modalDesc.appendChild(descContent);


        var buttonsContainer = document.createElement('span');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.flexDirection = 'column';
        buttonsContainer.style.alignItems = 'center';
        buttonsContainer.style.gap = '30px';
        buttonsContainer.style.marginTop = '30%';
        buttonsContainer.id = 'buttons-container';

        var addToCart = document.createElement('button');
        addToCart.classList.add('modal-button');
        addToCart.innerHTML = 'Add to cart';
        buttonsContainer.appendChild(addToCart);

        var buyNow = document.createElement('button');
        buyNow.classList.add('modal-button');

        buyNow.id = 'buyNow';
        buyNow.innerHTML = 'Buy Now';
        buttonsContainer.appendChild(buyNow);

        modalContent.appendChild(buttonsContainer);

        modal.appendChild(modalContent);

        document.body.appendChild(modal);

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.remove();
            }
        };
    });
});
