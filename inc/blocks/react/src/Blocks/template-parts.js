import { __ } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

function addHeaderPartAttribute(settings, name) {
    if (typeof settings.attributes !== 'undefined') {
        if (name == 'core/template-part') {
            settings.attributes = Object.assign(settings.attributes, {
                enableStickyHeader: {
                    type: 'boolean',
                    default: false
                },
                enableOverlayHeader: {
                    type: 'boolean',
                    default: false
                },
            });
        }
    }
    return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'kemet/header-part-control',
    addHeaderPartAttribute
);

const headerPartControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { Fragment } = wp.element;
        const { PanelBody, ToggleControl } = wp.components;
        const { InspectorControls } = wp.blockEditor;
        const { attributes, setAttributes, isSelected } = props;
        const { __ } = wp.i18n;
        let templateType;

        if (props.name == 'core/template-part') {
            templateType = useSelect((select) => {
                if (!select('core/edit-site')) {
                    return;
                }
                const { template: theme } = select(coreStore).getCurrentTheme();
                const {
                    getEditedEntityRecord,
                } = select(coreStore);
                const getEntityArgs = [
                    'postType',
                    'wp_template_part',
                    `${theme}//${attributes.slug}`
                ];
                const entityRecord = getEditedEntityRecord(...getEntityArgs);
                const type = entityRecord?.area || entityRecord?.slug;
                return type;
            }, [attributes]);
        }

        const onChangeHandler = (key, value) => {
            setAttributes({
                [key]: value
            });
        }

        return (
            <Fragment>
                <BlockEdit {...props} />
                {isSelected && (props.name == 'core/template-part') && templateType === 'header' &&
                    <InspectorControls>
                        <PanelBody
                            title={__('Kemet Settings', 'kemet')}
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__('Enable Sticky Header', 'kemet')}
                                checked={!!attributes.enableStickyHeader}
                                onChange={(newval) => onChangeHandler('enableStickyHeader', newval)}
                            />
                            <ToggleControl
                                label={__('Enable Overlay Header', 'kemet')}
                                checked={!!attributes.enableOverlayHeader}
                                onChange={(newval) => onChangeHandler('enableOverlayHeader', newval)}
                            />
                        </PanelBody>
                    </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'headerPartControls');

wp.hooks.addFilter(
    'editor.BlockEdit',
    'kemet/header-part-control',
    headerPartControls
);
