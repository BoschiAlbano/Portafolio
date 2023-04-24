import nodemailer from 'nodemailer'

export default async (req, res) => {

    const {method, body} = req

    console.log(body)

    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
        user: process.env.From, // generated ethereal user
        pass: process.env.Google_Nodemailer, // generated ethereal password
        },
    }

    const mensaje = {
        from: process.env.From, // sender address
        to: process.env.To, // list of receivers
        subject: body.Asunto, // Subject line
        text: JSON.stringify(body), // plain text body
        html: `
            <h1>Nombre: ${body.Nombre}</h1>
            <br/>
            <h1>Correo: ${body.Correo}</h1>
            <br/>
            <h1>Asunto: ${body.Asunto}</h1>
            <br/>
            <h1>Mensaje: ${body.Mensaje}</h1>

        `, // html body
    }

    switch (method) {
        case "POST":
            try {

                const transport = nodemailer.createTransport(config)
                const info = await transport.sendMail(mensaje)

                console.log(info)

                return res.status(200).json({msj: "Correcto, Formulario enviado", estado: true})

            } catch (error) {
                return res.status(400).json({msj: "Error, Al enviar el formulario", error: error.messaje, estado: false})
            }
        default:
            return res.status(400).json({msj: "Metodo No soportado"})
    }

}