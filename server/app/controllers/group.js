const Group = require('../models/Group');
const utils = require('../utils');

module.exports.create = async (req, res) => {
    let { name, urlname } = req.body;
    try {
        await req.asyncValidationErrors();
        const group = new Group({
            name,
            urlname
        });
        await group.save();
        utils.info(`Group '${name}' created!`);
        res.json({success: true});
    } catch(error) {
        res.json({success: false, error});
    }
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