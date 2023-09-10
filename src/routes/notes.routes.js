const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)


module.exports = notesRoutes





















/* function MyMiddleware(request, response, next) {
    console.log("Você passou pelo Middleware!");
    if(!request.body.isAdmin){
        return response.json({message: "user unauthorized"})
    }

    next(); // chama a proxima função

} // função para usar um verificador de requisição para ver se estiver tudo certo, se estiver continuará o código, se não estiver irá para aplicação */