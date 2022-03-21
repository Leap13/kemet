import Logo from "../common/logo"
const { __ } = wp.i18n;

const Header = () => {
    return <div className='kmt-panel-header'>
        <div className='logo'>
            <Logo />
        </div>
        <a href="https://kemet.io/docs/" className='docs kmt-button secondary' target="_blank">{__('Theme Documentation', 'kemet')}</a>
    </div>
}

export default Header