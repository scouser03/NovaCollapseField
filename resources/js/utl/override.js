export function overridePanel(attribute) {
    var h1 = document.getElementsByTagName('h1')
    var found
    for (var i = 0; i < h1.length; i++) {
        if (h1[i].textContent.includes(attribute)) {
            found = h1[i]
            break
        }
    }

    const helpText = found.nextElementSibling

    helpText.classList.add('ml-1')

    helpText.classList.remove('mb-3')

    const createElement = document.createElement('div')

    createElement.classList.add('flex', 'items-center', 'cursor-pointer')

    const parent = found.parentElement

    createElement.appendChild(found)

    createElement.appendChild(helpText)

    parent.insertBefore(createElement, parent.firstChild)

    const card = createElement.nextElementSibling

    createElement.addEventListener('click', function() {
        if (
            card.style.cssText == 'display: block;' ||
            card.style.cssText == ''
        ) {
            card.style.display = 'none'
        } else {
            card.style.display = 'block'
        }
    })
}
