import verified_icon from '../assets/verified_icon.svg';
const PopUp = ({title}) => {
    return (
        <div className='flex justify-center'>
            <div className="bg-transparent border-b-4 border-blue-500 flex items-center gap-3 w-fit p-3">
                <h2 className='font-medium text-lg'>{title ? 'Your Order has been placed' : 'Your Product has been added to your cart!!'}</h2>
                <img src={verified_icon} alt="" className='w-5 h-5' />
            </div>
        </div>
    )
}
// shows the popup message when the prodcut has been added to component
export default PopUp;