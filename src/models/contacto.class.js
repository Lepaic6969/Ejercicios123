export default class Contact{
    name="";
    lastName="";
    imail="@gmail";
    connected=false;
    constructor(name,lastName,email,connected){
        this.name=name;
        this.lastName=lastName;
        this.email=email;
        this.connected=connected;
    }
}