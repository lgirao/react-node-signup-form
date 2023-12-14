const contact_form = require('../models/contact_form');

const signup = ({name, email_address}) => {
    try {
        contact_form
        .findOne({where: {email_address: email_address}})
        .then((user) => {
            if(user) {
                return contact_form.update(
                    {
                        name: name,
                        email_address: email_address
                    },
                    {
                        where: { email_address: email_address },
                    }
                )
            }
            if(!user) {
                return contact_form.create({
                    name: name,
                    email_address: email_address,
                    date_created: Date.now()
                })
            }  
        })
    } catch (e) {
        console.log(e);
    }
}

module.exports = { signup };