import { type Dispatch, type SetStateAction } from 'react';
import type { TechnologyType } from '../type/technologiesType';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface ITechnologyProps {
    selectedTechnologies : TechnologyType[];
    setSelectedTechnologies : Dispatch<SetStateAction<TechnologyType[]>>;
}

const SelectedTechnology = ({selectedTechnologies, setSelectedTechnologies}: ITechnologyProps) => {
    const hasSelectedTechnologies = selectedTechnologies.length > 0;

    const removeOne = (id: string) => {
        setSelectedTechnologies((prev) => prev.filter((t) => t.id !== id));
        toast.warn('Technology removed from stack', { toastId: `remove-${id}` });
    };

    return (
        <div className="card bg-base-100 w-full shadow-sm rounded-lg">
            <div className='card-body flex flex-col'>
                <h2 className='text-lg font-semibold'>Your Stack</h2>

                <p className='text-sm text-gray-400 mt-1'>
                    {selectedTechnologies.length} Technology{selectedTechnologies.length !== 1 ? 's' : ''} Selected
                </p>

                {hasSelectedTechnologies ? (
                    <div className='flex flex-col gap-3 mt-4'>
                        {selectedTechnologies.map((tech) => (
                            <div key={tech.id} className='flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2'>
                                <div className='flex items-center gap-3'>
                                    <img src={tech.icon} alt={tech.name} className='w-8 h-8' />
                                    <div className='flex flex-col'>
                                        <span className='font-medium'>{tech.name}</span>
                                        <span className='text-xs text-gray-400'>{tech.category}</span>
                                    </div>
                                </div>
                                <button type='button' onClick={() => removeOne(tech.id)} className='text-gray-400 hover:text-gray-600'>
                                    <FaTimes />
                                </button>
                            </div>
                        ))}

                        <button
                            type='button'
                            className='btn btn-outline btn-error w-full mt-2'
                            onClick={() => { setSelectedTechnologies([]); toast.warn('All technologies removed', { toastId: 'remove-all' }); }}
                        >
                            Remove All
                        </button>
                    </div>
                ) : (
                    <div className='flex flex-col gap-3 mt-4'>
                        <p className='text-gray-400'>No Technologies Selected yet</p>
                        <div className='flex flex-col items-center border border-gray-200 p-4 rounded-lg'>
                            <p className='text-sm text-gray-400'>Your Stack is empty</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SelectedTechnology;