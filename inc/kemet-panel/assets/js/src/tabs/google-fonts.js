import { Dashicon, Button } from "@wordpress/components";
import Font from "../components/Font";
import { __ } from "@wordpress/i18n";
import { useContext } from "react";
import PanelContext from "../store/panel-store";
import Container from "../common/Container"

const GoogleFonts = () => {
    const { googleFonts, addFont } = useContext(PanelContext);

    const fontData = {
        name: '',
        variations: [],
        fallback: '',
    }
    const addHandler = () => {
        addFont(fontData)
    }

    return <Container>
        <h2 className="kmt-section-title"><span className='icon'><Dashicon icon="sos" /></span>{__('Google Fonts', 'kemet')}</h2>
        <div className="kmt-google-fonts">
            {googleFonts.length > 0 && googleFonts.map((font, index) => {
                return <Font fontData={font} index={index} />;
            })}
            <button className="kmt-button primary kmt-add-font" onClick={addHandler}>{__('Add Font', 'kemet')}</button>
            {googleFonts.length > 0 && <button className="kmt-button primary kmt-save-fonts">{__('Save Fonts', 'kemet')}</button>}
        </div>
    </Container>
}

export default GoogleFonts