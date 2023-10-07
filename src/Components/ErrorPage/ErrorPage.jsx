import { useNavigate } from 'react-router-dom';
import errorImage from '../../assets/errorPage.png'

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className='relative'>
            <div className='flex justify-center'>
            <button onClick={handleBack} className="absolute top-8 btn btn-outline normal-case">Go Back</button>
            </div>
            <img className='w-full h-screen' src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;