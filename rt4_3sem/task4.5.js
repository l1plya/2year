main = () => {

    const phone = /\+\d{11}/g
    const phone2 = /\d{11}/g
    const card = /\d{16}/g

    let result = 'Номер телефона +79771432113 и кредитка\
    4123231452345523\
    79443332211\
    89657774433'

    const strip = (x) => x.replace(phone, '').replace(card, '').replace(phone2,'')
    console.log(strip(result))

    return strip(result);
  }
  
main()
  