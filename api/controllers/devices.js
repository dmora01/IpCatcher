exports.getIpAddress = (req, res, next) => {
    let forwarded = req.headers['x-forwarded-for'];
    let ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    let agent = req.headers['user-agent'];

    res.status(200).json({
        ip: ip,
        device: agent
    });
}
