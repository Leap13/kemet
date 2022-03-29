import { useState } from "react";
import { Dashicon } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import { useContext } from "react";
import PanelContext from "../store/panel-store";

const Font = ({ fontData, index }) => {
    const { google: googleFonts, custom: customFonts } = KemetPanelData.kemetFonts;
    const { changeFont, removeFont } = useContext(PanelContext);
    const [currentFont, setCurrentFont] = useState(fontData.name);
    const fontVariations = googleFonts[currentFont] ? googleFonts[currentFont][0] : [];

    const handleChange = (value) => {
        if (!value) {
            return;
        }
        const data = googleFonts[value];
        const newFontData = { ...fontData };
        newFontData.name = value;
        newFontData.fallback = data[1];
        setCurrentFont(value);
        if (data[0].length === 1) {
            newFontData.variations = data[0];
        }
        changeFont(newFontData, index);
    }

    return <div className="kmt-font-card">
        <div className="kmt-font-card-header">
            <select onChange={e => handleChange(e.target.value)}>
                <option value=''>{__('Select Font', 'kemet')}</option>
                {Object.keys(googleFonts).map(font => {
                    return <option value={font} selected={font === currentFont}>{font}</option>
                })}
            </select>
            <Dashicon className="kmt-button primary kmt-delete-font" icon="minus" onClick={() => removeFont(fontData)} />
        </div>
        <div className="kmt-font-card-body">
            {fontVariations.length > 0 && <div className="kmt-font-variations">
                {fontVariations.map(variation => {
                    const fontStyle = variation[0] === 'i' ? __('Italic', 'kemet') : '';
                    const fontWeight = `${variation[1]}00`;
                    const disabled = fontVariations.length === 1 ? true : false;
                    const isChecked = fontVariations.length === 1 ? true : fontData.variations.includes(variation);

                    return <label>
                        <input type='checkbox' disabled={disabled} checked={isChecked} onChange={(e) => {
                            const newFontData = { ...fontData };
                            if (e.target.checked) {
                                newFontData.variations.push(variation);
                            } else {
                                newFontData.variations = newFontData.variations.filter(vari => vari !== variation)
                            }
                            newFontData.flag = !newFontData.flag;
                            changeFont(newFontData, index);
                        }} />
                        {`${fontWeight}${fontStyle}`}
                    </label>
                })}
            </div>}
        </div>
    </div>
}

export default Font