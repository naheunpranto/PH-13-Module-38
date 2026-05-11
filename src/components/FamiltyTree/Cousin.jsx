import Friend from "./Friend";
import Special from "./Special";

 

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Meem" && <Special asset={asset}/>
            }

            {
                name === "Prionti" && <Friend/>
            }
        </div>
    );
};

export default Cousin;