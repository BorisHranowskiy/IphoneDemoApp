exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    host: 'localhost',
    logLevel: 'info',
    framework: 'mocha',
    maxInstances:1,
    sync: true,
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    specs: [
        'test-cases/Login/Login.spec.js',
        'test-cases/Login/LoginValidation.spec.js',
        'test-cases/Registration/Registration.spec.js',
        'test-cases/Registration/RegistrationValidation.spec.js',
        
    ],
    capabilities: [
        {
            "platformName": "iOS",
            "appium:automationName": "XCUITest",
            "appium:udid": "B42AF555-69FF-46B1-A937-68B6D2EA8880",
            "appium:app": "/Users/boryskhranovskiy/Downloads/wdioNativeDemoApp2.app",
            "appium:deviceName": "iPhone 11 Pro Simulator",
            "appium:enableMultiWindows": true
          }
      ]
   
  
 }
 