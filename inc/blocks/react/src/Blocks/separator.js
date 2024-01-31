function addSeparatorAttribute(settings, name) {
    if (typeof settings.attributes !== 'undefined') {
        if (name == 'core/separator') {
            settings.supports = Object.assign(settings.support ?? {}, {
                spacing: {
                    margin: true,
                    padding: true,
                    __experimentalDefaultControls: {
                        margin: false,
                        padding: false
                    },
                    units: ["px", "em", "rem", "vh", "vw"],
                }
            });
        }
    }
    return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'kemet/separator-control',
    addSeparatorAttribute
);