import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface UserMessageType {
    name: string,
    email: string,
    companyName: string,
    message: string,
}

export async function POST(req: Request) {

    // fetch token from resend.com
    const resend = new Resend('re_FnFujksW_5NHvXy6Gn3tViNnaqZHWkWEi');

    const body : UserMessageType = await req.json();
    const { name, email, companyName, message } = body;

    try {
        // Send Message to admin
        resend.emails.send({
            from: 'connectionserver@resend.dev',
            to: "katish332@gmail.com",
            subject: "Project Proposal",
            html: `<div>
            <p>User Message</p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Company Name: ${companyName}</p>
            <p>Message: ${message}</p>

        </div>`
        });

        // Send Message to user
        resend.emails.send({
            from: 'connectionserver@resend.dev',
            to: "email",
            subject: "Project Proposal",
            html: `<div>
            <p>Thanku for sending message we will connect you soon!</p>
        </div>`
        });

        return NextResponse.json("Message send success");
    } catch (error) {
        console.log(error);

        return new NextResponse("Server Error", { status: 400 })
    }
}