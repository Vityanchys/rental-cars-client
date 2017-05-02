function handeResponse(response) {
    if (response.statusText !== "OK") {
        throw new Error('Looks like there was a problem. Status Code: ' +
            response.status);
        return 'Looks like there was a problem. Status Code: ' + response.status;
    }
    else {
        return 'Registration successful';
    }
}

exports.register = async (user) => {
    const response = await fetch('user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            passportId: user.passportId,
            admin: false,
            phone: user.phone,
        })
    })
    await handeResponse(response);
}
