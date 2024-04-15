import { Resend } from 'resend';

interface UserMessageType{
    name: string,
    email: string,
    companyName: string,
    message: string,
}

export const SendEmailToAdmin = async (data : UserMessageType) => {
    const resend = new Resend('re_FnFujksW_5NHvXy6Gn3tViNnaqZHWkWEi');

    resend.emails.send({
        from: 'connectionserver@resend.dev',
        to: "admin@truedat.com",
        subject: "Project Proposal",
        html: `<div>
            <p>User Message</p>
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Company Name: ${data.companyName}</p>
            <p>Message: ${data.message}</p>

        </div>`
    });
}

export const SendEmailToUser = async (email: string) => {
    const resend = new Resend('re_FnFujksW_5NHvXy6Gn3tViNnaqZHWkWEi');
    console.log(resend);
    
    resend.emails.send({
        from: 'connectionserver@resend.dev',
        to: "katish332@gmail.com",
        subject: "Project Proposal",
        html: `<div>
            <p>Thanku for sending message we eill connect you soon!</p>
        </div>`
    });
}