function crossroadSetActiveSection(direction) {
    document.querySelector('.crossroad').classList.add('crossroad--active-' + direction.toString())
    const sections = document.querySelectorAll('.crossroad__section')
    for (i = 0; i < sections.length; i++) {
        sections[i].classList.remove('crossroad__section--active')
        sections[i].classList.add('crossroad__section--hidden')
    }
    const section = document.querySelector('.crossroad__section[data-section=' + direction + ']')
    if (section) {
        section.classList.add('crossroad__section--active')
        section.classList.remove('crossroad__section--hidden')
    }
    scene.sectionActive = true
}
function crossroadReset() {
    document.querySelector('.crossroad').classList.remove('crossroad--active-bottom', 'crossroad--active-left', 'crossroad--active-right')
    const sections = document.querySelectorAll('.crossroad__section')
    for (i = 0; i < sections.length; i++) { sections[i].classList.remove('crossroad__section--active', 'crossroad__section--hidden') }
    window.location.hash = '#_'
    filterCardsByCategory(null)
}
const sections = document.querySelectorAll('.crossroad__heading')
for (i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', function (e) {
        const sectionDirection = this.parentNode.getAttribute('data-section')
        if (sectionDirection == 'bottom') window.location.hash = 'media'
        if (sectionDirection == 'left') window.location.hash = 'events'
        if (sectionDirection == 'right') window.location.hash = 'artists'
    })
}
const logo = document.querySelector('.crossroad__logo')
if (logo) { logo.addEventListener('click', function (e) { crossroadReset() }) }
if (window.location.hash || typeof subpageSectionActive !== 'undefined') {
    document.querySelector('.crossroad').classList.add('crossroad--disable-transitions')
    setTimeout(function () { document.querySelector('.crossroad').classList.remove('crossroad--disable-transitions') }, 300)
    const hash = window.location.hash.slice(1)
    if (hash == 'media') crossroadSetActiveSection('bottom')
    if (hash == 'events') crossroadSetActiveSection('left')
    if (hash == 'artists') crossroadSetActiveSection('right')
    if (typeof subpageSectionActive !== 'undefined' && subpageSectionActive == 'events') crossroadSetActiveSection('left')
    if (typeof subpageSectionActive !== 'undefined' && subpageSectionActive == 'artists') crossroadSetActiveSection('right')
} else { document.querySelector('.crossroad').classList.remove('crossroad--disable-transitions') }
window.addEventListener('hashchange', function (e) {
    const hashValue = window.location.hash.slice(1)
    switch (hashValue) {
        case 'media': crossroadSetActiveSection('bottom')
            break
        case 'events': crossroadSetActiveSection('left')
            break
        case 'artists': crossroadSetActiveSection('right')
            break
        default: crossroadReset()
    }
})
