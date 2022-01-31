function addLogoAttribute(settings, name) {
    if (typeof settings.attributes !== 'undefined') {
        if (name == 'core/site-logo') {
            console.log(settings);
            settings.attributes = Object.assign(settings.attributes, {
                mobileLogoId: {
                    type: 'number',
                    default: 0
                },
                mobileLogoUrl: {
                    type: 'string',
                    default: ''
                },
            });
        }
    }
    return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'kemet/logo-advanced-control',
    addLogoAttribute
);

const logoAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { Fragment } = wp.element;
        const { PanelBody, Button, ResponsiveWrapper } = wp.components;
        const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
        const { attributes, setAttributes, isSelected } = props;
        const { __ } = wp.i18n;
        const removeMedia = () => {
            setAttributes({
                mobileLogoId: 0,
                mobileLogoUrl: ''
            });
        }
        const onSelectMedia = (media) => {
            setAttributes({
                mobileLogoId: media.id,
                mobileLogoUrl: media.url
            });
        }
        return (
            <Fragment>
                <BlockEdit {...props} />
                {isSelected && (props.name == 'core/site-logo') &&
                    <InspectorControls>
                        <PanelBody
                            title={__('Mobile logo', 'kemet')}
                            initialOpen={true}
                        >
                            <div className="editor-post-featured-image">
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={onSelectMedia}
                                        value={attributes.mobileLogoId}
                                        allowedTypes={['image']}
                                        render={({ open }) => (
                                            <Button
                                                className={attributes.mobileLogoId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                                                onClick={open}
                                            >
                                                {attributes.mobileLogoId == 0 && __('Choose an logo', 'kemet')}
                                                {attributes.mobileLogoUrl &&
                                                    <ResponsiveWrapper
                                                        naturalWidth={100}
                                                        naturalHeight={100}
                                                    >
                                                        <img src={attributes.mobileLogoUrl} />
                                                    </ResponsiveWrapper>
                                                }
                                            </Button>
                                        )}
                                    />
                                </MediaUploadCheck>
                                {attributes.mobileLogoId != 0 &&
                                    <MediaUploadCheck>
                                        <Button onClick={removeMedia} isLink isDestructive>{__('Remove logo', 'kemet')}</Button>
                                    </MediaUploadCheck>
                                }
                            </div>
                        </PanelBody>
                    </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'logoAdvancedControls');

wp.hooks.addFilter(
    'editor.BlockEdit',
    'kemet/logo-advanced-control',
    logoAdvancedControls
);