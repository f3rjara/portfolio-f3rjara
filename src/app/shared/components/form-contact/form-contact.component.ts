import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
  providers: [ MessageService ]
})
export class FormContactComponent implements OnInit {

  public autoResize: boolean = true;
  public formContact!: UntypedFormGroup;
  nameUser: any ;
  emailUser: any ;
  MessageUser: any ;
  showSendMensage:Boolean = false;
  captcha: string = "";

  constructor(  private formBuilder: UntypedFormBuilder, private messageService: MessageService ) {}

  ngOnInit(): void {
    this.formContact = this.formBuilder.group( {
      nameUser: ['', [ Validators.required,  Validators.minLength(3)]],
      emailUser: ['', [ Validators.required,  Validators.minLength(5), Validators.email]],
      MessageUser: ['', [ Validators.required,  Validators.minLength(5) ]],
      captchaUser: ['', [ Validators.required ] ],
    })
  }

  resolveCaptcha( captchaResponse: string ) {
    this.captcha = captchaResponse;
  }

  onSubmitContact( $event: Event ) {
    this.showSendMensage = true;
    emailjs.sendForm('service_clajqvh', 'template_jtxswlq', $event.target as HTMLFormElement, 'Mo0t8WzZfRU84REnK')
      .then((result: EmailJSResponseStatus) => {
        this.messageService.add({severity:'success', summary: 'Enviado', detail: 'Su mensaje fue enviado!'});
        this.showSendMensage = false;
        this.formContact.reset();
      }, (error) => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Lo siento no se pudo enviar el mensaje.'});
        this.showSendMensage = false;
    });
  }

}
