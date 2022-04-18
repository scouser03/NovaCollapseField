export function overridePanel(attribute) {
    const h1 = Array.from(document.querySelectorAll('h1')).find(
        item => item.textContent == attribute
    )

    const helpText = h1.nextElementSibling

    helpText.classList.add('ml-1')

    helpText.classList.remove('mb-3')

    const createElement = document.createElement('div')

    createElement.classList.add('flex', 'items-center', 'cursor-pointer')

    const parent = h1.parentElement

    createElement.appendChild(h1)

    createElement.appendChild(helpText)

    parent.insertBefore(createElement, parent.firstChild)

    const card = createElement.nextElementSibling

    createElement.addEventListener('click', function() {
        card.classList.toggle('invisible')
    })
}
