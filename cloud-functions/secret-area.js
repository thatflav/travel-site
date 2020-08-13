exports.hadler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: 'Wellcome to the super secret area'
    })
}