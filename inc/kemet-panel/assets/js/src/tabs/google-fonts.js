import { Dashicon, Button } from "@wordpress/components";
import Font from "../components/Font";
import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
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
    const [isLoading, setIsLoading] = useState(false)
    const saveHandler = async () => {
        setIsLoading(true)
        const body = new FormData()
        const filterFonts = googleFonts.filter(font => !!font.name);
        body.append('action', 'kemet-save-fonts');
        body.append('nonce', KemetPanelData.nonce);
        body.append('fonts', JSON.stringify(filterFonts));

        try {
            const response = await fetch(KemetPanelData.ajaxurl, {
                method: 'POST',
                body,
            })

            if (response.status === 200) {
                const { success, data } = await response.json()
                if (success) {
                    KemetPanelData.savedFonts = data
                }
            }
        } catch (e) {
            alert(e);
        }
        setIsLoading(false)
    };
    const loadingClass = isLoading ? ' loading' : '';
    const disabled = JSON.stringify(googleFonts) === JSON.stringify(KemetPanelData.savedFonts);
    return <Container>
        <h2 className="kmt-section-title"><span className='icon'><Dashicon icon="sos" /></span>{__('Google Fonts', 'kemet')}</h2>
        <div className="kmt-google-fonts">
            {googleFonts.length > 0 && googleFonts.map((font, index) => {
                return <Font fontData={font} index={index} />;
            })}
            <button className="kmt-button primary kmt-add-font" onClick={addHandler}>{__('Add Font', 'kemet')}</button>
            <button className={`kmt-button primary kmt-save-fonts${loadingClass}`} onClick={saveHandler} disabled={disabled}>{__('Save', 'kemet')}</button>
        </div>
    </Container>
}

export default GoogleFonts