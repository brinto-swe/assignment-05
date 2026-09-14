import { type Dispatch, type SetStateAction } from 'react';
import type { TechnologyType } from '../type/technologiesType';

interface ITechnologyProps {
    selectedTechnologies : TechnologyType[];
    setSelectedTechnologies : Dispatch<SetStateAction<TechnologyType[]>>;
}

const SelectedTechnology = ({selectedTechnologies, setSelectedTechnologies}: ITechnologyProps) => {
    const hasSelectedTechnologies = selectedTechnologies.length > 0;

    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <div className='card-body flex flex-col'>
                <h2 className='text-lg font-bold'>Your Stack</h2>

                {hasSelectedTechnologies ? (
                    <>
                        <p className='text-gray-400'>
                            {selectedTechnologies.length} technology{selectedTechnologies.length > 1 ? 'ies' : 'y'} selected
                        </p>
                        <div className='flex flex-col items-center border border-gray-400 border-dashed p-4 rounded-lg mt-4'>
                            <p>Selected technologies: {selectedTechnologies.length}</p>
                            <button
                                type='button'
                                className='btn btn-link btn-sm mt-2'
                                onClick={() => setSelectedTechnologies([])}
                            >
                                Remove All
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className='text-gray-400'>No Technologies Selected yet</p>
                        <div className='flex flex-col items-center border border-gray-400 border-dashed p-4 rounded-lg mt-4'>
                            <p>Your Stack is empty</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SelectedTechnology;