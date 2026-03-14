import './Itemate.css'


function Itemdate(props){

    const day =props.day;
    const month = props.month;
    const Year =props.year;

    return(
        <div div className='name'>
        <span>{day} </span>
        <span>{month} </span>
        <span>{Year} </span>
        </div>

    )
}

export default Itemdate;