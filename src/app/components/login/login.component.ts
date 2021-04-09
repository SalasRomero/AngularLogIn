import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor( public auth: AngularFireAuth) { }

  email ='dsalas@ozelot.it';
  password = '123456';
  LogInFail : boolean = false;
  Mensaje : string = "";

  ngOnInit(): void {
  }

  loginEmail(){
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    /*this.auth.signInWithEmailLink(this.email,this.password)
    .then(res=> {
      //new firebase.auth.EmailAuthProvider(this.email,this.password)
      console.log("Correcto")
    })
    .catch(err => console.error(err))*/
    if(this.email == "" || this.password== "")
    {
      this.LogInFail= true;
      this.Mensaje = "No deje campos vacíos";
      return false;
    }
    this.auth.signInWithEmailAndPassword(this.email,this.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      return true;
    })
    .catch((error) => {
      console.log("Error");
      //var errorCode = error.code;
      //var errorMessage = error.message;
      this.LogInFail= true;
      this.Mensaje = "Error al intentar iniciar sesión valide su correo y contraseña";
      return false;
    });
  }

  LogOut()
  {
    this.auth.signOut();
  }


}
