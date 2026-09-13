import { FaStar } from "react-icons/fa6";
import type { TechnologyType } from "../type/technologiesType";

const Technologies = ({ technologies }: TechnologyType) => {

    return (
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                technologies.map((technology: TechnologyType) => {
                    return (
                        <div key={technology.id} className="card bg-base-100 w-full shadow-sm">
                            <div className="card-body flex flex-col gap-6">
                                <figure className="flex justify-between">
                                    <img className="w-10"
                                        src={technology.icon}
                                        alt="Shoes" />
                                    <label className="px-3 py-1 bg-green-200 rounded-4xl border-2 border-green-500">{technology.badge}</label>
                                </figure>
                                <div className="flex flex-col gap-3">
                                    <h2 className="card-title">{technology.name}</h2>
                                    <p>{technology.description}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="bg-gray-200 px-3 py-1 rounded" >{technology.category}</label>
                                    <label className="px-3 py-1">{technology.difficulty}</label>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <label className="">{technology.rating}</label>
                                    </div>
                                </div>
                                <div className="card-actions justify-center">
                                    <button className="btn w-full bg-black text-white rounded-xl">Add to Stack</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Technologies;