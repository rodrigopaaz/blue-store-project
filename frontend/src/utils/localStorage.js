const favAdd = (product) => {
  const items = JSON.parse(localStorage.getItem('favorite')) || []
  localStorage.setItem('favorite', JSON.stringify([...items, product]))
}

const favRem = (item) => {
  const items = JSON.parse(localStorage.getItem('favorite')) || []
  const itemToRemove = items.findIndex((i) => i.title === item.title)
  if (itemToRemove !== -1) {
    items.splice(itemToRemove, 1)
    localStorage.setItem('favorite', JSON.stringify(items))
  }
}

const cartAdd = (product) => {
  const items = JSON.parse(localStorage.getItem('cart')) || []
  localStorage.setItem('cart', JSON.stringify([...items, product]))
}

const cartRem = (item) => {
  const items = JSON.parse(localStorage.getItem('cart'))
  const itemToRemove = items.findIndex((i) => i.title === item.title)
  if (itemToRemove !== -1) {
    items.splice(itemToRemove, 1)
    localStorage.setItem('cart', JSON.stringify(items))
  }
}

module.exports = { favAdd, favRem, cartAdd, cartRem }
