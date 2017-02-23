export default (req, res, next) => {
    if (req.session.user)return next();
    res.send({ce: 311});
};