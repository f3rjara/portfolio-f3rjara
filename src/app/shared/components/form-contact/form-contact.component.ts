import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  public autoResize = true;
  public formContact!: UntypedFormGroup;
  nameUser = "";
  emailUser= "";
  MessageUser= "";
  showSendMensage = false;
  captcha = "";

  constructor(  private formBuilder: UntypedFormBuilder ) {}

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
        //this.messageService.add({severity:'success', summary: 'Enviado', detail: 'Su mensaje fue enviado!'});
        this.showSendMensage = false;
        console.log(result.text);
        this.formContact.reset();
      }, (error) => {
        //this.messageService.add({severity:'error', summary: 'Error', detail: 'Lo siento no se pudo enviar el mensaje.'});
        this.showSendMensage = false;
        console.log(error);
    });
  }

}
