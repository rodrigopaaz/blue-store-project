const localCurrency = (numb) => {
  const numberValue = Number(numb.split('R$')[1].replace('.', '').replace(',', '.')).toFixed(2)
  const formattedValue = numberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  return formattedValue
}

export default localCurrency
