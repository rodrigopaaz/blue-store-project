export const getFav = () => {
  const items = JSON.parse(localStorage.getItem('favorite')) || []
  return items
}

export const favAdd = (product) => {
  const items = getFav()
  localStorage.setItem('favorite', JSON.stringify([...items, product]))
}

export const favRem = (item) => {
  const items = getFav()
  const itemToRemove = items.findIndex((i) => i.title === item.title)
  if (itemToRemove !== -1) {
    items.splice(itemToRemove, 1)
    localStorage.setItem('favorite', JSON.stringify(items))
  }
}

export const getCart = () => {
  const items = JSON.parse(localStorage.getItem('cart')) || []
  return items
}

export const cartAdd = (product) => {
  const items = getCart()
  localStorage.setItem('cart', JSON.stringify([...items, product]))
}

export const cartRem = (item) => {
  const items = getCart()
  const itemToRemove = items.findIndex((i) => i.title === item.title)
  if (itemToRemove !== -1) {
    items.splice(itemToRemove, 1)
    localStorage.setItem('cart', JSON.stringify(items))
  }
}
