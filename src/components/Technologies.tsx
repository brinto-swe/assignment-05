import { use } from "react";
import type { TechnologyType } from "./type/technologiesType";
import TechnologiesCard from "./technologies/TechnologiesCard";
import SelectedTechnology from "./technologies/SelectedTechnology";


interface TechProps {
    technologiesPromise: Promise<TechnologyType[]>
}

const Technologies = ({ technologiesPromise }: TechProps) => {

    const technologies = use(technologiesPromise);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9">
                <TechnologiesCard technologies={technologies} />
            </div>
            <div className="lg:col-span-3">
                <SelectedTechnology />
            </div>
        </div>
    );
};

export default Technologies;