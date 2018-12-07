;(function () {
    var navbarButtonEl = document.getElementById('category-list-switcher')
    var categoryListEl = document.getElementById('category-list')
    var categoryEl = document.getElementById('category-wrapper')

    navbarButtonEl.addEventListener('mouseover', function () {
        categoryListEl.classList.toggle('category__list--active-tablet')
    })

    navbarButtonEl.addEventListener('mouseover', function () {
        categoryListEl.classList.toggle('category__list--active-mobile')
    })

    navbarButtonEl.addEventListener('mouseover', function () {
        categoryEl.classList.toggle('category-wrapper--active-mobile')
    })
})();