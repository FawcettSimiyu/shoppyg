import verified_icon from '../assets/verified_icon.svg';

const PopUp = ({ message }) => {
    return (
        <div className='fixed top-0 left-0 right-0 mt-4 z-50 flex justify-center'>
            <div className="bg-white border-b-4 border-blue-500 flex items-center gap-3 w-fit p-3 rounded-lg shadow-lg">
                <h2 className='font-medium text-lg'>{message}</h2>
                <img src={verified_icon} alt="Verified" className='w-5 h-5' />
            </div>
        </div>
    );
};

// Shows the popup message when the product has been added to the component
export default PopUp;

