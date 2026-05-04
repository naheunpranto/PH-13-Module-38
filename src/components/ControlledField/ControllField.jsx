import { useState } from "react";

 

const ControllField = () => {

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");

        if(password.length < 6) {
            setError("6 character or longer password needed");
        }
        else{
            setError("");
        }
        
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        
        if(password.length < 6) {
            setError("Password must be 6 character or longer")
        }
        else{
            setError("");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email"  placeholder="Email" required/>
                <br />
                <input type="password" name="password"  placeholder="Password" onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: "red"}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControllField;