const isEmail = (email) => {
  const regX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email.match(regX)) return true
  else return false
}

const isEmpty = (string) => {
  if (string.trim() === '') return true
  else return false
}

const validatersSignUPData = (data) => {
  let errors = {}

  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty'
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address'
  }

  if (isEmpty(data.password)) {
    errors.password = 'Must not be empty'
  }

  if (isEmpty(data.confirmPassword)) {
    errors.password = 'Must not be empty'
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords does not match'
  }

  if (isEmpty(data.name)) {
    errors.name = 'Must not be empty'
  }
  if (isEmpty(data.username)) {
    errors.username = 'Must not be empty'
  }

  if (isEmpty(data.phoneNo)) {
    errors.handle = 'Must not be empty'
  }
  if (isEmpty(data.type)) {
    errors.type = 'Must not be empty'
  }
  if (isEmpty(data.phoneNo)) {
    errors.phoneNo = 'Must not be empty'
  }
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}

const validatersLoginData = (data) => {
  let errors = {}

  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty'
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address'
  }

  if (isEmpty(data.password)) {
    errors.password = 'Must not be empty'
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}

export { validatersSignUPData, validatersLoginData }
