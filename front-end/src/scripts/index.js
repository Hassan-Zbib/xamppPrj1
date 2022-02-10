let base_url = 'http://localhost/xamppPrj1/back-end/'

const getEquation = () => {
    const id ='equation'
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    let url = `${base_url}equation.php?x=${x}&y=${y}`
    let results = document.querySelector(`#${id} .results`)
    if (!x || !y) {
        results.textContent = 'Enter Both Values'
    } else {
        fetch(new URL(url))
        .then(res => res.json())
        .then(json => {
            results.textContent = `Result: ${json.result}`
        })
        .catch(err => showErr(id, err))
    }
}

const checkPalindrome = () => {
    const id = 'palindrome'
    let input = document.querySelector(`#${id} input`).value
    let url = `${base_url}palindrome.php?string=${input}`
    let results = document.querySelector(`#${id} .results`)
    if (!input)  {
        results.textContent = 'Enter String First'
    } else {
        fetch(new URL(url))
        .then(res => res.json())
        .then(json => {
            let msg = json.isPalindrome ? 'it\'s a Palindrome!' : 'This is NOT a Palindrome!!!'
            results.textContent = `Result: ${msg}`
        })
        .catch(err => showErr(id, err))
    }
}

const trimSpaces = () => {
    const id = 'spaces'
    let input = document.querySelector(`#${id} input`).value
    let url = `${base_url}spaces.php?string=${input}`
    let results = document.querySelector(`#${id} .results`)
    if (!input) {
        results.textContent = 'Enter String First'
    } else {
        fetch(new URL(url))
        .then(res => res.json())
        .then(json => {
            document.querySelector(`#${id} .results`).textContent = `Result: ${json.cleanedString}`
        })
        .catch(err => showErr(id, err))
    }
}

const validatePass = () => {
    const id = 'password'
    let input = document.querySelector(`#${id} input`).value
    let url = `${base_url}password.php?password=${input}`
    let results = document.querySelector(`#${id} .results`)
    if (!input) {
        results.textContent = 'Enter Password To Validate'
    } else {
        fetch(new URL(url))
        .then(res => res.json())
        .then(json => {
            let is_valid = json.isValid ? 'Valid Password' : 'this Password is not valid'
            let msg = `Result: <br/> ${is_valid} <br/> harsh: "${json.hash}"`
            document.querySelector(`#${id} .results`).innerHTML = msg
        })
        .catch(err => showErr(id, err))
    }
}

const showErr = (id, error) => {
    let msg = `An error has occured: ${error}`
    document.querySelector(`#${id} p.results`).textContent = msg
}

const main = () => {
    document.querySelector('#equation .input a').addEventListener('click', getEquation)
    document.querySelector('#palindrome .input a').addEventListener('click', checkPalindrome)
    document.querySelector('#spaces .input a').addEventListener('click', trimSpaces)
    document.querySelector('#password .input a').addEventListener('click', validatePass)
}

window.onload = main