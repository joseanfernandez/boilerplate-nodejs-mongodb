module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello, world!'
    }
  },

  {
    method: 'GET',
    path: '/user/{id?}',
    handler: async (request, h) => {
      const path = request.path.slice(1, request.path.length)
      const id = request.params.id ? request.params.id : null

      try {
        const data = id ? await fun.getUser(path, id) : await fun.getUsers(path)
        return data
      } catch (ex) {
        Log.error('Error while try to get ' + path)
        return {}
      }
    }

  },

  {
    method: 'GET',
    path: '/items',
    handler: async (request, h) => {
      const path = request.path.slice(1, request.path.length)
      try {
        const data = fun.getItems(path)
        return data
      } catch (ex) {
        Log.error('Error while try to get ' + path)
        return {}
      }
    }

  }
]
