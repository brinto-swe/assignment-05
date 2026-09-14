import { use, useState } from "react";
import type { TechnologyType } from "./type/technologiesType";
import TechnologiesCard from "./technologies/TechnologiesCard";
import SelectedTechnology from "./technologies/SelectedTechnology";


interface TechProps {
    technologiesPromise: Promise<TechnologyType[]>
}

const Technologies = ({ technologiesPromise }: TechProps) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyType[]>([]);

    const technologies = use(technologiesPromise);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {
                technologies.map((technology: TechnologyType, ind: number) => {
                    return (
                        <div key={ind} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:col-span-12">
                            <div className="lg:col-span-9">
                                <TechnologiesCard technologies={[technology]} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
                            </div>
                            <div className="lg:col-span-3">
                                <SelectedTechnology selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
                            </div>
                        </div>
                    );
                })
            }


        </div>
    );
};

export default Technologies;