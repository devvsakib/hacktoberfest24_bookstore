const Title = ({ text, heading, customClassText }) => {
    return (
        <div className='text-center mx-auto relative'>
            <p className={'text-white absolute left-0 right-0 top-0 ' + customClassText}>{text}</p>
            <h4 className='text-5xl md:text-7xl py-2 font-semibold w-fit gradText'>{heading}</h4>
        </div>
    );
};

export default Title;