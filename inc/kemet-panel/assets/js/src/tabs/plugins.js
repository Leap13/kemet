import { Fragment, useContext } from "@wordpress/element";
import SinglePlugin from '../common/SinglePlugins'
import { __ } from "@wordpress/i18n";
import Container from "../common/Container";
import PanelContext from "../store/panel-store";
const { Dashicon } = wp.components;

const Plugins = () => {
    const { plugins, recommendedPlugins } = useContext(PanelContext);

    return (
        <Container>
            <h2 className="kmt-section-title"><span className='icon'><Dashicon icon="admin-plugins" /></span>{__('Build Your Website With No Limits', 'kemet')}</h2>
            {Object.keys(plugins).length > 0 && (
                <Fragment>
                    <div className="kmt-plugins-list">
                        {recommendedPlugins.map((plugin) => {
                            return <SinglePlugin slug={plugin} />
                        })}
                    </div>
                </Fragment>
            )}
        </Container>
    )

}

export default Plugins;