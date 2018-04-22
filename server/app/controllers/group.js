const Group = require('../models/Group');
const User = require('../models/User');
const utils = require('../utils');

module.exports.create = async (req, res) => {
    const userId = res.locals.user._id;
    let { name, urlname } = req.body;
    // try {
        await req.asyncValidationErrors();
        const group = new Group({
            name,
            urlname
        });
        await group.save();
        const user = await User.findOne({ _id: userId});
        console.log(user, userId);
        user.groups.push(group._id);
        await user.save();
        utils.info(`Group '${name}' created!`);
        res.json({success: true});
    // } catch(error) {
    //     res.json({success: false, error});
    // }
};

module.exports.delete = async (req, res) => {
    let { urlname } = req.body;
    try {
        await req.asyncValidationErrors();
        const group = await Group.findOne({ urlname });
        await group.remove();
        utils.info(`Group '${urlname}' deleted!`);
        res.json({success: true});
    } catch(error) {
        res.json({success: false, error});
    }
};


module.exports.all = async (req, res) => {
    const groups = await Group.find({});
    res.json({ success: true, groups })
};