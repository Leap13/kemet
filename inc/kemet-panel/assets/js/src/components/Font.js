import { useState } from "react";
import { CheckboxControl } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import {
    __experimentalGrid as Grid
} from '@wordpress/components';
import { useContext } from "react";
import PanelContext from "../store/panel-store";

const Font = ({ fontData, index }) => {
    const { google: googleFonts, custom: customFonts } = KemetPanelData.kemetFonts;
    const { changeFont } = useContext(PanelContext);
    const [currentFont, setCurrentFont] = useState('');
    const fontVariations = googleFonts[currentFont] ? googleFonts[currentFont][0] : [];
    const handleChange = (value) => {
        setCurrentFont(value);
    }
    return <div>
        <select onChange={e => handleChange(e.target.value)}>
            {Object.keys(googleFonts).map(font => {
                return <option value={font}>{font}</option>
            })}
        </select>
        {fontVariations.length > 0 && <Grid columns={2} className="kmt-font-variations">
            {fontVariations.map(variation => {
                const fontStyle = variation[0] === 'i' ? __('Italic', 'kemet') : '';
                const fontWeight = `${variation[1]}00`;
                const disabled = fontVariations.length === 1 ? true : false;
                const isChecked = fontVariations.length === 1 ? true : fontData.variations.includes(variation);
                console.log(isChecked);
                return <CheckboxControl
                    disabled={disabled}
                    label={`${fontWeight} ${fontStyle}`}
                    checked={isChecked}
                />
            })}
        </Grid>}
    </div>
}

export default Font