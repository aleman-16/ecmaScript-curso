const users = {
  gndx: {
    country: 'MX'
  },
  ana: {
    country: 'CO'
  }
}

console.log(users.gndx);
//para evitar que se genere un error si no existe el elemento
console.log(users?.bebeloper?.country);