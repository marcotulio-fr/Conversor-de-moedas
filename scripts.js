const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")

function converterValor() {
    const eurotoday = 6.20
    const dolartoday = 5.60
    const libratoday = 7.20
    const bitcointoday = 616166.74
    const inputValueTyped = document.querySelector(".input-value-typed").value
    const valuestoconvert = document.querySelector(".values-to-convert")
    const valuesconverted = document.querySelector(".values-converted")



    if (currencySelect.value == "dolar") {
        valuesconverted.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(inputValueTyped / dolartoday)
    }

    if (currencySelect.value == "euro") {
        valuesconverted.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(inputValueTyped / eurotoday)
    }
    if (currencySelect.value == "bitcoin") {
        valuesconverted.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "XBT"
            }).format(inputValueTyped / bitcointoday)
    }

    if (currencySelect.value == "libra") {
        valuesconverted.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(inputValueTyped / libratoday)
    }

    valuestoconvert.innerHTML = new Intl.NumberFormat("pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }).format(inputValueTyped)

}

function changeCurrency() {
    const imgCurrency = document.querySelector(".img-currency");
    const currencyconverted = document.querySelector(".currency-converted");

    if (currencySelect.value == "dolar") {
        imgCurrency.src = "./img/dólar.png"
        currencyconverted.innerHTML = "Dólar"

    }


    if (currencySelect.value == "euro") {
        currencyconverted.innerHTML = "Euro"
        imgCurrency.src = "./img/euro.png"

    }

    if (currencySelect.value == "bitcoin") {
        currencyconverted.innerHTML = "Bitcoin"
        imgCurrency.src = "./img/bitcoin.png"

    }


    if (currencySelect.value == "libra") {
        currencyconverted.innerHTML = "Libra"
        imgCurrency.src = "./img/libra.png"

    }


    converterValor()

}

convertButton.addEventListener("click", converterValor)
currencySelect.addEventListener("change", changeCurrency)
