import { useState } from "react";

 

const ControllField = () => {

    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" placeholder="Email" required/>
                <br />
                <input type="password" name="password" id="" placeholder="Password" onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControllField;