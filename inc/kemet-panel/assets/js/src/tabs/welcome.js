import Container from "../common/Container";
const { __ } = wp.i18n;
const { Dashicon } = wp.components;

const WelcomeTab = (props) => {
    return <Container>
        <div className='welcome-section'>
            <h2 className="kmt-section-title"><span className='icon'><Dashicon icon="admin-customizer" /></span>{__('Welcome', 'kemet')}</h2>
        </div>
    </Container>
}


export default WelcomeTab;