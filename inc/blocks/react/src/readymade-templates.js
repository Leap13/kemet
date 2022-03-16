import { __ } from '@wordpress/i18n';

const readymadeTemplates = {
    headers: {
        header1: {
            title: __('Header 1', 'kemet'),
            image: `${KemetBlocksSettingsData.themeUrl}assets/headers/header-layout-01.svg`,
            content: '<!-- wp:pattern {"slug":"kemet/header"} /-->'
        },
        header2: {
            title: __('Header 2', 'kemet'),
            image: `${KemetBlocksSettingsData.themeUrl}assets/headers/header-layout-02.svg`,
            content: '<!-- wp:pattern {"slug":"kemet/header-with-top-bar"} /-->'
        },
        header3: {
            title: __('Header 3', 'kemet'),
            image: `${KemetBlocksSettingsData.themeUrl}assets/headers/header-layout-03.svg`,
            content: '<!-- wp:pattern {"slug":"kemet/footer"} /-->'
        },
    }
}

export default readymadeTemplates