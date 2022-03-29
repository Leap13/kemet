import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
const PanelContext = React.createContext({
    tabs: [],
    plugins: {},
    pluginsStatus: {},
    recommendedPlugins: [],
    doAction: (action, plugin) => { },
    googleFonts: [],
    addFont: (font) => { },
    changeFont: (font, index) => { },
    removeFont: (index) => { }
})

export const PanelProvider = (props) => {
    const tabs = [];
    const event = new CustomEvent('kmt:dashboard:customtabs', { detail: tabs });
    document.dispatchEvent(event);
    const plugins = KemetPanelData.plugins_data;
    const pluginsCache = KemetPanelData.plugins_cache;
    const [pluginsStatus, setPluginStatus] = useState(pluginsCache || []);
    const recommendedPlugins = KemetPanelData.recommended_plugins;
    const fontsCache = KemetPanelData.savedFonts;
    const [googleFonts, setGooleFonts] = useState(fontsCache || []);

    const updatePluginsStatus = async () => {
        const body = new FormData()
        body.append('action', 'kemet-plugins-status')
        body.append('nonce', KemetPanelData.nonce)

        try {
            const response = await fetch(KemetPanelData.ajaxurl, {
                method: 'POST',
                body,
            })

            if (response.status === 200) {
                const { success, data } = await response.json()
                if (success) {
                    setPluginStatus(data)
                }
            }
        } catch (e) {
            alert(e);
        }
    }

    const doAction = async (action, plugin) => {
        const { path } = plugins[plugin];
        const body = new FormData()
        body.append('action', action)
        body.append('nonce', KemetPanelData.plugin_manager_nonce)
        body.append('path', path)
        body.append('slug', plugin)

        try {
            const response = await fetch(KemetPanelData.ajaxurl, {
                method: 'POST',
                body,
            })
            if (response.status === 200) {
                const { success } = await response.json()

                if (success) {
                    await updatePluginsStatus();
                }
            }
        } catch (e) {
            alert(e);
        }
    }

    const pluginActions = {
        deactivate: {
            title: __('Deactivate', 'kemet'),
            class: 'secondary',
            action: 'kemet-deactivate-plugin'
        },
        activate: {
            title: __('Activate', 'kemet'),
            class: 'primary',
            action: 'kemet-activate-plugin'
        },
        install: {
            title: __('Install', 'kemet'),
            class: 'primary',
            action: 'kemet-install-plugin'
        }
    }

    const addFont = (font) => {
        const newFonts = [...googleFonts];
        newFonts.push(font);
        setGooleFonts(newFonts);
    }

    const changeFont = (font, index) => {
        const newFonts = [...googleFonts];
        newFonts[index] = font;
        setGooleFonts(newFonts);
    }

    const removeFont = (font) => {
        let newFonts = [...googleFonts];
        newFonts = newFonts.filter(fontdata => fontdata.name !== font.name);
        setGooleFonts(newFonts);
    }

    const pluginsContext = {
        tabs,
        plugins,
        pluginsStatus,
        pluginActions,
        recommendedPlugins,
        doAction: doAction,
        googleFonts,
        addFont,
        changeFont,
        removeFont
    };

    return <PanelContext.Provider value={pluginsContext}>
        {props.children}
    </PanelContext.Provider>
}

export default PanelContext