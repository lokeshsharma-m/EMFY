
export class Registration{ 
    public fullName: string;
    public registerNumber: string;
    public email: string;
    public password: string;
    public department:string ; 
    public phoneNumber: string;
    public passwordConfirmation:string
  constructor(){
    this.fullName='';
    this.registerNumber='';
    this.email='';
    this.password='';
    this.department='';
    this.phoneNumber='' ;
    this.passwordConfirmation='' }
  }

  export class Login{
      public email:string;
      public password:string;
      constructor(){
          this.email='';
          this.password='';
      }
  }
  export class Attendance{
    public RegisterNumber:string;
    public Hours:string;
     public id:string;
     constructor()
     {
       this.RegisterNumber='';
       this.Hours="";
       this.id='';
     }
    
  }