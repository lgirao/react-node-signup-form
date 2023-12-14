const contact_form = require('../models/contact_form');

const getUserDataService = async () => {
    try {
        const totalUsers = await contact_form.count({})
        console.log("The total user count is: " + totalUsers);
        return {
            "Total users: ": totalUsers
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getUserDataService };