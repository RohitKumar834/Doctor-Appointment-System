const User = require('../models/User');

// Get User Info
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

// Update User Info
exports.updateUser = async (req, res) => {
    const { name, email } = req.body;

    const updatedUser = {
        name,
        email
    };

    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user = await User.findByIdAndUpdate(
            req.user.id,
            { $set: updatedUser },
            { new: true }
        );

        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};
