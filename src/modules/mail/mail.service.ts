import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";
import { ConfigService } from "@nestjs/config";
import { join } from "path";
import pug from "pug";

@Injectable()
export class MailService {
  constructor(private readonly configService: ConfigService) {}

  private renderTemplate(template: string, context: Record<string, unknown>) {
    const templatePath = join(__dirname, `templates/${template}`);
    return pug.renderFile(templatePath, context);
  }

  emailTransport() {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      logger: true,
      debug: true,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log(process.env.SMTP_HOST, process.env.SMTP_PORT);

    return transporter;
  }

  async sendEmail(
    to: string,
    subject: string,
    template: string,
    context: Record<string, unknown>,
  ) {
    const transport = this.emailTransport();

    const options: nodemailer.SendMailOptions = {
      from: `noreply-sendIt <${this.configService.get<string>("EMAIL_USER")}>`,
      to,
      subject,
      html: this.renderTemplate(template, context),
    };
    try {
      await transport.sendMail(options);
      console.log("Email sent successfully");
    } catch (error) {
      console.log("Error sending mail: ", error);
    }
  }
}
