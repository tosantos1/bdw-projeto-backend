const UserController = {
  async createUser(req, res){

    const body = req.body

    try {
      const newUser = await
    } catch(err) {
      return res.status(400).json(err)
    }
  }
}