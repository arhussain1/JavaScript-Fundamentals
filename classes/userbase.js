
class UserBase {
  constructor(users) {
    this.users = users
  }

  getNames() {
    return this.users.map(user => user.getName())
  }

  getIntroductions() {
    return this.users.map(user => user.getIntroduction())
  }
}

module.exports = UserBase;