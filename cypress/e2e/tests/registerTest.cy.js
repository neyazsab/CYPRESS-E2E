//we will write our testcase using mocha describe function and then call function and inside the it block we 
//gonna write our testcase
import { registerPages } from "../../Pages/registerPage"
const registerObj = new registerPages
import registerData from '../../fixtures/registerData.json'

describe('test Automation', ()=>{

it('register flow',()=>{
registerObj.openURL()
registerObj.enterFirstName(registerData.firstName)
registerObj.enterlastName(registerData.lastName)
registerObj.enteremail(registerData.email)
registerObj.entertelephone(registerData.telephone)
registerObj.enterpassword(registerData.password)
registerObj.selectCheckbox()
registerObj.clickOnContinue()


})
})
