import WelcomeTab from './tabs/welcome'
import System from './tabs/system'
import Support from './tabs/support'
import { render, Fragment, useContext } from '@wordpress/element'
import Header from './layout/Header';
import Card from './common/Card';
import Container from './common/Container';
import PanelContext, { PanelProvider } from './store/panel-store'
import pushHistory from './common/push-history'

const { __ } = wp.i18n;
const { TabPanel, Panel, PanelBody } = wp.components;

const RendeTabs = () => {
    let { tabs } = useContext(PanelContext);
    const compare = (a, b) => {
        if (a.priority < b.priority) {
            return -1;
        }
        if (a.priority > b.priority) {
            return 1;
        }
        return 0;
    }
    let defaultTabs = [
        {
            name: 'welcome',
            title: __('Welcome', 'kemet'),
            className: 'welcome',
            priority: 5,
            data: {
                Component: WelcomeTab,
                props: {}
            }
        },
        {
            name: 'support',
            title: __('Support', 'kemet'),
            className: 'support',
            priority: 25,
            data: {
                Component: Support,
                props: {}
            }
        },
        {
            name: 'system',
            title: __('System Info', 'kemet'),
            className: 'system',
            priority: 30,
            data: {
                Component: System,
                props: {}
            }
        },
    ];
    let names = new Set(tabs.map(d => d.name));
    let mergedTabs = [...tabs, ...defaultTabs.filter(d => !names.has(d.name))];
    tabs = mergedTabs;
    const onSelectHandler = (tabName) => {
        pushHistory(tabName);
    }
    return <Fragment>
        <Header />
        <TabPanel className="kemet-dashboard-tab-panel"
            activeClass="active-tab"
            initialTabName={KemetPanelData.kemet_redirect}
            onSelect={onSelectHandler}
            tabs={tabs.sort(compare)}>
            {
                (tab) => {
                    const { Component, props } = tab.data;
                    return <Panel className={`tab-section ${tab.name}`}>
                        <PanelBody
                            opened={true}
                        >
                            <Component {...props} />
                        </PanelBody>
                    </Panel>
                }
            }
        </TabPanel>
    </Fragment>
};

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('kmt-dashboard')) {
        let sidebar = document.getElementById("adminmenuwrap"),
            sidebarHeight = sidebar.offsetHeight + 'px';
        document.getElementById("wpbody").style.minHeight = sidebarHeight
        render(<PanelProvider><RendeTabs /></PanelProvider>, document.getElementById('kmt-dashboard'))
    }
})


window.KmtAdminComponents = {
    Card,
    Container
}