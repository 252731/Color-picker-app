
const getColorScheme = document.getElementById("get-color")
getColorScheme.addEventListener('click', displaySchemes)


function displaySchemes() {
  const inputColor = document.getElementById("favcolor")
  const inputColorValue = inputColor.value
  const inputColorArr = inputColorValue.slice(1)
  const modes = document.getElementById("dropdown")
  const inputMode = modes.value
  const endpoints = `scheme?hex=${inputColorArr}&mode=${inputMode}`
  fetch(`https://www.thecolorapi.com/${endpoints}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      const hexColorArr = data.colors.map((color) => {
        return color.hex.value
      })
      console.log(hexColorArr)
      const pallete = document.getElementById("palleteContainer")
      pallete.innerHTML = " "
      const hexContainer = document.getElementById("hexContainer")
      hexContainer.innerHTML = " "

      for (let hexColor of hexColorArr) {
        const colors = document.createElement("div")
        colors.style.backgroundColor = hexColor
        pallete.append(colors)
        const hexNumber = document.createElement("div")
        hexNumber.textContent = hexColor
        hexContainer.append(hexNumber)
      }
    })

}
displaySchemes()