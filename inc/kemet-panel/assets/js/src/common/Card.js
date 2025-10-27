const Card = (props) => {
    return <div id={props.id} className='kmt-card'>
        <div className='card-body'>
            {props.children}
        </div>
    </div>
}

export default Card