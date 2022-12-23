import Login from '../../POM/loginPage'
const login = new Login()


describe('Login', function() {
    it('Click login button', async () => {
        await login.loginValidation()
        })
});