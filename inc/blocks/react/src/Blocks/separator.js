import { __experimentalToolsPanel as ToolsPanel, __experimentalToolsPanelItem as ToolsPanelItem, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { cleanEmptyObject, getInlineStyles } from '../utils/index';
import { useBlockProps } from '@wordpress/block-editor';

function addSeparatorAttribute(settings, name) {
    if (typeof settings.attributes !== 'undefined') {
        if (name == 'core/separator') {
            settings.attributes = Object.assign(settings.attributes, {
                style: {
                    type: 'object',
                    default: {}
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

const separatorAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { Fragment } = wp.element;
        const { InspectorControls } = wp.blockEditor;
        const { attributes, setAttributes, isSelected } = props;
        const { style = {}, style: { spacing = {} } = {} } = attributes;
        const { __ } = wp.i18n;

        const defaultSpacing = {
            top: null,
            left: null,
            right: null,
            bottom: null,
        };

        const resetAll = () => {
            const newStyle = {
                ...style,
                spacing: {
                    ...style?.spacing,
                    padding: defaultSpacing,
                    margin: defaultSpacing,
                },
            };
            setAttributes({
                ...attributes,
                style: cleanEmptyObject(newStyle),
            });
        };

        const onChangeHandler = (key, value) => {
            const newStyle = {
                ...style,
                spacing: {
                    ...style?.spacing,
                    [key]: value,
                },
            };
            setAttributes({
                ...attributes,
                style: cleanEmptyObject(newStyle),
            });
        }

        return (
            <Fragment>
                <BlockEdit {...props} />
                {isSelected && (props.name == 'core/separator') &&
                    <InspectorControls>
                        <ToolsPanel label={__('Dimensions')} resetAll={resetAll}>
                            <ToolsPanelItem
                                hasValue={() => !!spacing.padding && Object.keys(spacing.padding).length}
                                label={__('Padding')}
                                onDeselect={() => onChangeHandler('padding', defaultSpacing)}
                            >
                                <BoxControl
                                    label={__('Padding')}
                                    values={spacing.padding}
                                    onChange={(nextValues) => onChangeHandler('padding', nextValues)}
                                />
                            </ToolsPanelItem>
                            <ToolsPanelItem
                                hasValue={() => !!spacing.margin && Object.keys(spacing.margin).length}
                                label={__('Margin')}
                                onDeselect={() => onChangeHandler('margin', defaultSpacing)}
                            >
                                <BoxControl
                                    label={__('Margin')}
                                    values={spacing.margin}
                                    onChange={(nextValues) => onChangeHandler('margin', nextValues)}
                                />
                            </ToolsPanelItem>
                        </ToolsPanel>
                    </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'separatorAdvancedControls');

wp.hooks.addFilter(
    'editor.BlockEdit',
    'kemet/separator-control',
    separatorAdvancedControls
);

function separatorApplyExtraStyles(extraProps, blockType, attributes) {

    if (blockType.name === 'core/separator') {
        const { style } = attributes;
        if (style) {
            extraProps.style = {
                ...getInlineStyles(style),
                ...extraProps.style,
            };
        }
    }

    return extraProps;
}

wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'kemet/separator-control',
    separatorApplyExtraStyles
);

// function addBackgroundColorStyle(props) {
//     return lodash.assign(props, { style: { backgroundColor: 'red' } });
// }

// wp.hooks.addFilter(
//     'blocks.getSaveContent.extraProps',
//     'my-plugin/add-background-color-style',
//     addBackgroundColorStyle
// );