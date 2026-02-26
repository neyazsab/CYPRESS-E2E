import { homePage } from "../../Pages/homePage"
const homePageObj = new homePage()
import testData from '../../fixtures/testData.json'




describe('test Automation', ()=>{

    before(() =>{
        cy.login(testData.login.username, testData.login.Password)
    })

it('Add To Cart flow',()=>{
homePageObj.searchProduct(testData.product.productName)
homePageObj.addToCart()
homePageObj.verifySucessMessage(testData.message.successMessage)

})
})
