;(function () {
    var navbarButtonEl = document.getElementById('category-list-switcher')
    var categoryListEl = document.getElementById('category-list')

    navbarButtonEl.addEventListener('click', function () {
        categoryListEl.classList.toggle('category__list--active-mobile')
    })

})();