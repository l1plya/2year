const deltaHr = () => {
  const utc = new Date()
  const hours = utc.getTimezoneOffset() / -60
  return hours
}

main = () => {
  console.log(deltaHr())
}

main()