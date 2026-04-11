import Mailgen from "mailgen";



const emailVerificationMailGenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App! we' are excited to have you on board!",
            action: {
                instructions: "To verify your email please click on the following button",
                button: {
                    color: "#22BC66",
                    text: "Verify your email",
                    link: verificationUrl
                },
            },
            outro: "Need help or have questions? Just reply to this email, we'd love to help you!"
        }
    }
}


const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We got a request to reset the password of your account",
            action: {
                instructions: "To reset your password click on the following button or link",
                button: {
                    color: "#22BC66f",
                    text: "Reset Password",
                    link: passwordResetUrl
                },
            },
            outro: "Need help or have questions? Just reply to this email, we'd love to help you!"
        }
    }
}

export {
    emailVerificationMailGenContent,
    forgotPasswordMailGenContent
}