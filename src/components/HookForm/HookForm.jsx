import useInputField from "../../hooks/useInputField";


const HookForm = () => {

    const [name, nameOnChange] = useInputField("");
    const [email, emailOnChange] = useInputField("");
    const [password, passwordOnChange] = useInputField("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", name, email, password);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" onChange={nameOnChange} defaultValue={name}/>
                <br />
                <input type="email" name="" id="" placeholder="Email" onChange={emailOnChange} defaultValue={email}/>
                <br />
                <input type="password" name="" id="" placeholder="Password" onChange={passwordOnChange} defaultValue={password}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;