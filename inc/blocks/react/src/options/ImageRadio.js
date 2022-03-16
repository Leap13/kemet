import {
    __experimentalGrid as Grid,
} from '@wordpress/components';
import './ImageRadio.scss'
const ImageRadio = (props) => {
    const { options, title, onChange, getValue } = props;

    return <div className="kmt-control kmt-image-radio-control">
        <label className="kmt-control-title">{title}</label>
        <div className="kmt-control-content">
            <Grid columns={1} gap={1}>
                {Object.keys(options).map(optionKey => {
                    const optionData = options[optionKey];
                    return <div className='kmt-radio-option' onClick={(e) => {
                        const parent = e.target.closest('.kmt-control-content');
                        parent.querySelectorAll('.kmt-radio-option').forEach(function (e) {
                            e.classList.remove('active');
                        })
                        e.target.parentNode.classList.add('active');
                        onChange(optionData.content)
                    }}>
                        <img src={optionData.image} alt={optionData.title} />
                    </div>
                })}
            </Grid>
        </div>
    </div>
}

export default ImageRadio