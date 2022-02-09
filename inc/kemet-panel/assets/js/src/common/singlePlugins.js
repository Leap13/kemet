import { useContext, useState } from "@wordpress/element";
import PanelContext from "../store/panel-store";
import Card from "./Card";

const { Dashicon } = wp.components;
const SinglePlugin = ({ slug }) => {
    const { plugins, pluginsStatus, doAction, pluginActions: actions } = useContext(PanelContext);
    const { name, description } = plugins[slug];
    const status = pluginsStatus[slug];
    const [isLoading, setIsLoading] = useState(false)
    const updatePluginStatus = async (action) => {
        if (!isLoading) {
            setIsLoading(true);
        }
        await doAction(action, slug);
        setIsLoading(false);
    }
    const { title: btnTitle, action, class: btnClass } = actions[status];
    return <Card id={slug}>
        <div className='kmt-plugin-icon'>
            <img src={KemetPanelData.images_url + slug + '.png'} />
            {isLoading && (
                <Dashicon icon='update' />
            )}
        </div>
        <div className='kmt-plugin-data'>
            <h4 className="kmt-plugin-title">{name}</h4>
            {description && (
                <div className="kmt-plugin-description" dangerouslySetInnerHTML={{
                    __html: description
                }}>
                </div>
            )}
        </div>
        <div className="plugin-action">
            <a
                onClick={() => updatePluginStatus(action)}
                className={`kmt-button ${btnClass}`}>
                {btnTitle}
            </a>
        </div>
    </Card>
}

export default SinglePlugin;