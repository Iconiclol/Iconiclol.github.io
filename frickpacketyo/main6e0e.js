function filterCardsByCategory(category) {
    const categoryLinksAll = document.querySelectorAll('.crossroad__categories__item')
    for (var i = 0; i < categoryLinksAll.length; i++) { categoryLinksAll[i].classList.remove('crossroad__categories__item--active') }
    const cardsAll = document.querySelectorAll('.card')
    for (var i = 0; i < cardsAll.length; i++) { cardsAll[i].classList.remove('card--hidden') }
    if (category !== null) {
        const cardsNotFiltered = document.querySelectorAll('.card:not([data-categories~="' + category + '"]):not(.card--year):not(.card--break)')
        for (var i = 0; i < cardsNotFiltered.length; i++) { cardsNotFiltered[i].classList.add('card--hidden') }
        document.querySelector('.crossroad__categories__item[href="#' + category + '"]').classList.add('crossroad__categories__item--active')
    }
    if (category == null) {
        document.querySelector('.crossroad__categories__item[href="#subscribe"]').classList.add('crossroad__categories__item--active')
        document.querySelector('.card[data-categories="upcoming"]').classList.add('card--hidden')
        document.querySelector('.card[data-categories="about"]').classList.add('card--hidden')
        document.querySelector('.card[data-categories="network"]').classList.add('card--hidden')
    }
}
const categoryItems = document.querySelectorAll('.crossroad__categories__item')
for (var i = 0; i < categoryItems.length; i++) {
    categoryItems[i].addEventListener('click', function (e) {
        e.preventDefault()
        if (this.classList.contains('crossroad__categories__item--active')) {
            var filterCategory = null
            this.classList.remove('crossroad__categories__item--active')
        } else {
            var filterCategory = this.getAttribute('href').substring(1)
            this.classList.add('crossroad__categories__item--active')
        }
        filterCardsByCategory(filterCategory)
    })
}
