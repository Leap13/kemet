/**
* WordPress dependencies
*/
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { useRegistry, useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { PanelBody, CustomSelectControl, TextControl, Dashicon } from '@wordpress/components';
import {
    store as blockEditorStore,
} from '@wordpress/block-editor';
import { registerPlugin } from '@wordpress/plugins'
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-site';
import { Fragment } from 'react';
import {
    store as blocksStore,
} from '@wordpress/blocks';

const MyPluginSidebar = () => {
    const { removeBlocks, insertBlocks } = useDispatch(blockEditorStore);
    const { getSelectedBlockClientIds, getBlockRootClientId, getBlocks } = useSelect(
        blockEditorStore
    );
    const allBlocks = getBlocks();
    const allBlockClientIds = allBlocks.map(
        (block) => block.clientId
    );
    const registry = useRegistry();
    const {
        resetBlocks,
        resetSelection,
        replaceInnerBlocks,
        setHasControlledInnerBlocks,
        __unstableMarkNextChangeAsNotPersistent,
    } = registry.dispatch(blockEditorStore);
    const { getBlockName } = registry.select(blockEditorStore);
    const test2 = useSelect((select) => select('core/block-editor'));
    // console.log(allBlocks);
    console.log(registry.select(blockEditorStore).getBlocks());
    const test3 = useSelect(
        blocksStore
    ).getBlockTypes()[0];
    const test = () => {
        if (allBlockClientIds.length) {

            // removeBlocks(allBlockClientIds);
            insertBlocks([test3]);
        }
    }

    return <Fragment>
        <PluginSidebarMoreMenuItem target="kemet" className="kmt-sidebar" icon={
            <svg className="kmt-svg-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 58.04"><path d="M1,28V44H2.59c7.46,0,12.71-7.16,14.79-20.15l.3-1.85H1v3H13.15C12,30.68,9.54,38.37,4,39.55V28Z" transform="translate(-1 0.04)" /><path d="M4,12.36A8.32,8.32,0,0,1,5.79,7.2l5.11,5.32a2.56,2.56,0,0,0,1.65,1,1.5,1.5,0,0,0,1-.39l.14-.13L19.21,7.2A8.32,8.32,0,0,1,21,12.36V13h3v-.64A11.59,11.59,0,0,0,21.28,4.9L23.9,2.13,21.64,0,19,2.8A11.43,11.43,0,0,0,6,2.8C4.54,1.2,3.4,0,3.36,0L1.1,2.13,3.72,4.9A11.59,11.59,0,0,0,1,12.36V13H4Zm8.81-8.71A8.34,8.34,0,0,1,17.1,4.83L12.81,9.34,8.53,4.83A8.31,8.31,0,0,1,12.81,3.65Z" transform="translate(-1 0.04)" /><path d="M18,55,14.64,44.92a29.1,29.1,0,0,0,6.53-11.44A60.5,60.5,0,0,0,24,17.59L24,16H1v3H20.92c-.45,6.17-3.13,28-18.35,28H1v3H2.55a18,18,0,0,0,3.78-.4L8.14,55H1v3H24V55ZM9.64,48.56A16.38,16.38,0,0,0,12.41,47l2.67,8H11.8Z" transform="translate(-1 0.04)" /></svg>
        }>
            {__('Kemet Templates', 'kemet')}
        </PluginSidebarMoreMenuItem>
        <PluginSidebar
            name="kemet"
            title={__('Kemet Templates')}
            icon={<svg className="kmt-svg-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 58.04"><path d="M1,28V44H2.59c7.46,0,12.71-7.16,14.79-20.15l.3-1.85H1v3H13.15C12,30.68,9.54,38.37,4,39.55V28Z" transform="translate(-1 0.04)" /><path d="M4,12.36A8.32,8.32,0,0,1,5.79,7.2l5.11,5.32a2.56,2.56,0,0,0,1.65,1,1.5,1.5,0,0,0,1-.39l.14-.13L19.21,7.2A8.32,8.32,0,0,1,21,12.36V13h3v-.64A11.59,11.59,0,0,0,21.28,4.9L23.9,2.13,21.64,0,19,2.8A11.43,11.43,0,0,0,6,2.8C4.54,1.2,3.4,0,3.36,0L1.1,2.13,3.72,4.9A11.59,11.59,0,0,0,1,12.36V13H4Zm8.81-8.71A8.34,8.34,0,0,1,17.1,4.83L12.81,9.34,8.53,4.83A8.31,8.31,0,0,1,12.81,3.65Z" transform="translate(-1 0.04)" /><path d="M18,55,14.64,44.92a29.1,29.1,0,0,0,6.53-11.44A60.5,60.5,0,0,0,24,17.59L24,16H1v3H20.92c-.45,6.17-3.13,28-18.35,28H1v3H2.55a18,18,0,0,0,3.78-.4L8.14,55H1v3H24V55ZM9.64,48.56A16.38,16.38,0,0,0,12.41,47l2.67,8H11.8Z" transform="translate(-1 0.04)" /></svg>}
        >
            <PanelBody>
                <h1>Kemet</h1>
                <button onClick={() => test()}>Click</button>
            </PanelBody>
        </PluginSidebar>
    </Fragment>
};

registerPlugin('kemet', {
    render: () => <MyPluginSidebar />,
})