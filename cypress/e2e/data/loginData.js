module.exports = {
  validuser: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  invaliduser: {
    username: 'invalid_username',
    password: 'invalid_password',
    message: 'Epic sadface: Username and password do not match any user in this service'
  },

  lockedoutuser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
    errmessage: 'Sorry, this user has been locked out.'
  },

  problemuser: {
    username: 'problem_user',
    password: 'secret_sauce'
  },

  glitchuser: {
    username: 'performance_glitch_user',
    password: 'secret_sauce'
  }
}
