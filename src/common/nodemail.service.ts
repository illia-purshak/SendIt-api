import { Injectable } from "@nestjs/common";
import nodemailer, { Transporter } from "nodemailer";

@Injectable()
export class NodemailerService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "localhost",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendMail(emailData: EmailType) {
    try {
      return await this.transporter.sendMail(emailData);
    } catch (err) {
      console.error("Email sending failed:", err);
      throw err;
    }
  }
}

type EmailType = {
  from: string;
  to: string;
  subject: string;
  text: string;
};
