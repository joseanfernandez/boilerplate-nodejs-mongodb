const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  class: String
})

module.exports = mongoose.model('User', userSchema)
