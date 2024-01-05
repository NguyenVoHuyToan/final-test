import databaseService from "../service/databaseService.js";

export const getProductController = async (req, res, next) => {
    if(req.query.length>0)
    {
        const getAllProduct= await databaseService.inventory.find({instock:{$lt:100}}).toArray();
        console.log(itemList);
        if(getAllProduct.length>0){
            return res.json({getAllProductsAllProducts})
        }
    }
    else{
        const getAllProduct= await databaseService.inventory.find().toArray();
        
        if(getAllProduct){
            return res.json({getAllProduct})
        }
    }
}

export const updateProductController = async (req, res, next) => {
    if(Object.keys(req.query).lenght > 0)
    {
        const updateProduct= await databaseService.order.find({quantity:{$lt:100}}).toArray();
        console.log(itemList);
        if(updateProduct.length>0){
            return res.json({updateProductsAllProducts})
        }
    }
    else{
        const updateProduct= await databaseService.inventory.find().toArray();
        
        if(updateProduct){
            return res.json({updateProduct})
        }
    }
}