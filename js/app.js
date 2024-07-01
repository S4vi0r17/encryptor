let inputText = document.querySelector('.main .input')
let outputText = document.querySelector('.aside .output')
let encryptButton = document.querySelector('.buttons .encrypt')
let decryptButton = document.querySelector('.buttons .decrypt')
let copyButton = document.querySelector('.aside .button')

encryptButton.addEventListener('click', () => {
    let text = inputText.value
    let encryptedText = text.replace(/[aeiou]/g, match => {
        if (match === 'a') return 'ai'
        if (match === 'e') return 'enter'
        if (match === 'i') return 'imes'
        if (match === 'o') return 'ober'
        if (match === 'u') return 'ufat'
    })

    outputText.value = encryptedText
})

decryptButton.addEventListener('click', () => {
    let text = inputText.value
    let decryptedText = text.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')

    outputText.value = decryptedText
})

copyButton.addEventListener('click', () => {
    let text = outputText.value
    navigator.clipboard.writeText(text)
})
