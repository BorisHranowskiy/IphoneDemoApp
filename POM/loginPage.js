import Locators from '../POM/locators'
class Login {

    async loginIntoApp() {
       await Locators.LOGIN_ICON.click()
       await expect(Locators.SIGNUP_FORM).toBeDisplayed()
       await Locators.INPUT_EMAIL.setValue('email')
       await Locators.INPUT_PASSWORD.setValue('password')
       await Locators.LOGIN_BTN.click()
    }

    async loginValidation() {
        await Locators.LOGIN_ICON.click()
        await expect(Locators.SIGNUP_FORM).toBeDisplayed()
        await Locators.LOGIN_BTN.click()
        await expect(Locators.VALID_EMAIL_MESSAGE).toBeDisplayed()
        await expect(Locators.VALID_PASSWORD_MESSAGE).toBeDisplayed()
     }

}
export default Login