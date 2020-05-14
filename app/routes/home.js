module.exports = (application) => {
    application.get('/', (req, res) => {
        application.app.controllers.home.home(application, req, res);
    });
};