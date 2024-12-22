import { TiTick } from "react-icons/ti";

const Feature = ({feature}) => {
    return (
        <div>
            <div>
                <p className="flex items-center">
                    <TiTick className="text-green-500 mr-2"></TiTick>
                    {feature}
                </p>
            </div>
        </div>
    );
};

export default Feature;