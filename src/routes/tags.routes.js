const { Router } = require('express')

const TagsController = require('../controllers/TagsController')

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/', ensureAuthenticated, tagsController.index)



module.exports = tagsRoutes;





















/* function MyMiddleware(request, response, next) {
    console.log("Você passou pelo Middleware!");
    if(!request.body.isAdmin){
        return response.json({message: "user unauthorized"})
    }

    next(); // chama a proxima função

} // função para usar um verificador de requisição para ver se estiver tudo certo, se estiver continuará o código, se não estiver irá para aplicação */