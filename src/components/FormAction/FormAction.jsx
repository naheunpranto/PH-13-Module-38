 

const FormAction = () => {

    const handleFormAction = (FormData) => {
        console.log(FormData);
        
    }

    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" placeholder="Name"/>
                <br />
                <input type="email" name="" id="" placeholder="Email"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;