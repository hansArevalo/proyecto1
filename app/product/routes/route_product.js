const {Router}= require ("express");
const router = Router();
const {getAllProducts, postCreatProduct}=require("../actions/action_product")
const{validationCreateProduct} = require("../validation/validationCreateProduct")

router.get('/',getAllProducts);
router.post('/',validationCreateProduct, postCreatProduct)


module.exports= router;