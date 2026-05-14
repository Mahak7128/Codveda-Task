
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function Contact(){
     
     const { username, setUsername, email, setEmail, phone, setPhone, address, setAddress} = useContext(AppContext);
    return(
        <div className="page">
            <h1> Contact Page</h1>

            <input type="text" placeholder="Enter Name" value= {username}
            onChange={(e) => setUsername(e.target.value)} />

            <br/>

            <input type="email" placeholder="Enter Email" value= {email}
            onChange={(e) => setUsername(e.target.value)} />

            <br/>
            <input type="tel" placeholder="Enter valid phone number" value = {phone}
            onChange={(e) => setPhone(e.target.value)} />
            <br/>
            <br/>
            <div className=" user" >
            
                <h3> User Details </h3>
                <br/>
            <p> Name : {username} </p>
            <br/>
            
            <p> Email : {email}</p>
            <br/>
            <p> Phone no : {phone}</p>
            
            </div>
        
        </div>

       
    );
}
export default Contact;