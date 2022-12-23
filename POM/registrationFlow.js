import Locators from '../POM/locators'
const {Creds} = require('../POM/data');

class Registration {
    async registrationFlow() {
       await Locators.LOGIN_ICON.click()
       await expect(Locators.SIGNUP_FORM).toBeDisplayed()
       await Locators.SIGNUP_BTN_MODAL.click()
       await Locators.INPUT_EMAIL.setValue(Creds.email)
       await Locators.INPUT_PASSWORD.setValue(Creds.password)
       await Locators.INPUT_CONFRIM_PASSWORD.setValue(Creds.confrimPassword)
       await Locators.SIGNUP_BTN.click()
       await expect(Locators.SIGNEDUP_MESSAGE).toBeDisplayed()
    }

    async registrationValidation() {
        await Locators.LOGIN_ICON.click()
        await expect(Locators.SIGNUP_FORM).toBeDisplayed()
        await Locators.SIGNUP_BTN_MODAL.click()
        await Locators.SIGNUP_BTN.click()
        await expect(Locators.VALID_EMAIL_MESSAGE).toBeDisplayed()
        await expect(Locators.VALID_PASSWORD_MESSAGE).toBeDisplayed()
        await expect(Locators.VALID_CONFRIM_PASSWORD_MESSAGE).toBeDisplayed()
     }

}
export default Registration