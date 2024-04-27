const Product= require("../model/Product")


module.exports ={
    createProduct: async(req, res)=>{
        const newProduct = new Product(req.body)
        try{
            await newProduct.save()
            res.status(200).json("Product created sucessfully")
        }catch(err){
            res.status(500).json("fail to create product")
        }
    },
    getAllProduct: async(req, res)=>{
        try{
            const product= await Product.find().sort({createAt: -1})
            res.status(200).json(product)
        }catch(err){
            res.status(500).json("Failed to get the products")

        }
    },
    getProduct: async (req, res)=>{
        try{
            const product = await Product.findById(req.params.id)
            res.status(200).json(product)
        }
        catch(err){
            res.status(500).json("failed to get the product")

        }
    },
    searchProduct: async(req, res)=>{
        try{
            const result = await Product.aggregate(
                [
                    {
                      $search: {
                        index: "furniture",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}