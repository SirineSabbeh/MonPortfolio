import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
myform:any

constructor(private fb: FormBuilder) {
  this.myform= this.fb.group({
      fullname: ['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      subject: ['',[Validators.required]],
      message: ['',[Validators.required]]
    })
  
}



ngOnInit(): void {

}
SaveContact(e:Event){
   
 alert("Message sent successfully");
 e.preventDefault();
 emailjs
 .sendForm(
      'service_1d82nz6',
    'template_tk1fznr',
     e.target as HTMLFormElement,
    '7iM9mW6JynosonOAf'
   )
    .then(
      (result: EmailJSResponseStatus) => {
    console.log(result.text);
   },
      (error) => {
       console.log(error.text);
     }
   );
  this.myform.reset();
  
 }

 get fullname(){
  return this.myform.get("fullname")
}
get email(){
  return this.myform.get("email")
}
get subject(){
  return this.myform.get("subject")
}
get message(){
  return this.myform.get("message")
}


}
