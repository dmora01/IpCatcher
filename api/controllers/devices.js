exports.getIpAddress = (req, res, next) => {
    let forwarded = req.headers['x-forwarded-for'];
    let ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;

    res.status(200).json({
        ipAddress: ip
    });
}
