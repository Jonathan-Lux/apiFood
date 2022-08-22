const knex = require("../database/knex")

class PlatesController {
    async create(request, response) {
        const {title, description,prices,ingredients} = request.body
        const {user_id} = request.params
        
        const plates_id = await knex ("plates").insert({
            title, description, user_id
        })

        const priceInsert = prices.map(price =>{
            return {
                plates_id,price
            }
        })
        await knex("price").insert(priceInsert)

        const ingredientsInsert = ingredients.map(name =>{
            return {
                plates_id,
                name,
                user_id
        }})

        await knex("ingredient").insert(ingredientsInsert)
        response.json()
    }
}

module.exports = PlatesController