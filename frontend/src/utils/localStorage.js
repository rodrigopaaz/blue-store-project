const getFav = () => {
  const items = JSON.parse(localStorage.getItem('favorite')) || []
  return items
}

const favAdd = (product) => {
  const items = getFav()
  localStorage.setItem('favorite', JSON.stringify([...items, product]))
}

const favRem = (item) => {
  const items = getFav()
  const itemToRemove = items.findIndex((i) => i.title === item.title)
  if (itemToRemove !== -1) {
    items.splice(itemToRemove, 1)
    localStorage.setItem('favorite', JSON.stringify(items))
  }
}

const getCart = () => {
  const items = JSON.parse(localStorage.getItem('cart')) || []
  return items
}

const cartAdd = (product) => {
  const items = getCart()
  localStorage.setItem('cart', JSON.stringify([...items, product]))
}

const cartRem = (item) => {
  const items = getCart()
  const itemToRemove = items.findIndex((i) => i.title === item.title)
  if (itemToRemove !== -1) {
    items.splice(itemToRemove, 1)
    localStorage.setItem('cart', JSON.stringify(items))
  }
}

module.exports = { getFav, favAdd, favRem, getCart, cartAdd, cartRem }
