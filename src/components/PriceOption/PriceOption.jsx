import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {

    const {name, price, features} = option;
    return (
        <div className="bg-blue-500 text-white rounded-xl p-4 flex flex-col">
            <h2 className="text-center ">
                <span className="text-7xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8">
                {name}
            </h4>

            <div className="pl-6 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
                
            </div>
            <button className="bg-green-500 py-2 w-full mt-12 rounded-xl hover:bg-green-900 font-bold">
                Buy Now</button>
            
        </div>
    );
};

export default PriceOption;