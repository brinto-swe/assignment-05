import { use } from "react";
import type { TechnologyType } from "./type/technologiesType";
import TechnologiesCard from "./technologies/TechnologiesCard";


interface TechProps {
    technologiesPromise: Promise<TechnologyType[]>
}

const Technologies = ({ technologiesPromise }: TechProps) => {

    const technologies = use(technologiesPromise);
    return (
        <div>
            <TechnologiesCard technologies ={technologies}/>
        </div>
    );
};

export default Technologies;