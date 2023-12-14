const { getUserDataService } = require('../service/getUserData');

const getUsers = async (req, res) => {
    try {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(await getUserDataService());
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getUsers };