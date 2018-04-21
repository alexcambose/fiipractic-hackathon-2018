module.exports.createGroup = async (req, res) => {
    let { name, urlname } = req.body;
    try {
        await req.asyncValidationErrors();
        const user = new User({
            first_name,
            last_name,
            username,
            email,
            password
        });
        await user.save();
        res.json({success: true});
        utils.info(`Group '${name}' created!`);
    } catch(error) {
        res.json({success: false, error});
    }
};