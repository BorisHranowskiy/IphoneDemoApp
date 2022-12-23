import Registration from '../../POM/registrationFlow'

const registration = new Registration()


describe('Login', function() {
    it('Click login button', async () => {
        await registration.registrationFlow()
        })
});