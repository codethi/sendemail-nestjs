import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail(email: string): void {
    this.mailerService.sendMail({
      to: email,
      from: 'docencia.thiago@gmail.com',
      subject: 'Vídeo massinha do Youtube',
      text: 'texto normal',
      html: '<h1>Olá Galera agora o email é dinamico</h1>',
    });
  }
}
