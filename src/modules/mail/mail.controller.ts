import { Controller, Get } from "@nestjs/common";
import { MailService } from "./mail.service";

@Controller("mail")
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  async sendMail() {
    await this.mailService.sendEmail(
      "purshak.illa@gmail.com",
      "Test mail from sendIt",
      "test-email.pug",
      { name: "noreply-sendIt" },
    );
  }
}
