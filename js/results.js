const resultsDiv = document.querySelector('#results')
const urlParams = new URLSearchParams(window.location.search);

urlParams.forEach((value, inputField) => {
    let inputFieldElement = document.createElement('p')

    inputText = inputField + ': ' + value

    inputFieldElement.textContent = inputText

    resultsDiv.append(inputFieldElement)
})