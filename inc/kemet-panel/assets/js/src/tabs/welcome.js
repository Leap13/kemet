import Card from "../common/Card"
import Container from "../common/Container"
import {
    __experimentalGrid as Grid,
} from '@wordpress/components';
const { __ } = wp.i18n;
const { Dashicon } = wp.components;
import { useState } from "@wordpress/element";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Support = () => {
    const Alert = withReactContent(Swal)
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const submitHandler = async () => {
        if (isLoading) {
            return;
        }
        setIsLoading(true);
        if (!checkEmail(email)) {
            Alert.fire({
                icon: 'error',
                title: __('Invalid Email Address...', 'kemet-addons'),
                text: __('Please enter a valid email address!', 'kemet-addons'),
            })
            setIsLoading(false);
            return;
        }

        const body = new FormData()
        body.append('action', 'kemet-mail-subscribe')
        body.append('nonce', KemetPanelData.nonce)
        body.append('email', email)

        try {
            const response = await fetch(KemetPanelData.ajaxurl, {
                method: 'POST',
                body,
            })

            if (response.status === 200) {
                const { success, data: { status } } = await response.json();
                if (success && status) {
                    Alert.fire({
                        icon: 'success',
                        title: __('Success', 'kemet-addons'),
                        text: __('Thanks for your subscribe!', 'kemet-addons'),
                        timer: 3000
                    })
                    setEmail('');
                } else {
                    Alert.fire({
                        icon: 'error',
                        title: __('Invalid Email Address...', 'kemet-addons'),
                        text: __('Please enter a valid email address!', 'kemet-addons'),
                    })
                }
            }
        } catch (e) {
            alert(e);
        }
        setIsLoading(false);
    }
    const checkEmail = (emailAddress) => {
        var pattern = new RegExp(/^((“[\w-+\s]+“)|([\w-+]+(?:\.[\w-+]+)*)|(“[\w-+\s]+“)([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    const loadingClass = isLoading ? ' loading' : '';
    return <Container>
        <h2 className="kmt-section-title"><span className='icon'><Dashicon icon="sos" /></span>{__('Have a Question?', 'kemet-addons')}</h2>
        <Grid columns={3} gap={8} className='kmt-support'>
            <Card>
                <div className='kmt-card-title'>
                    <span className="icon">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={40}
                            height={40}
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="M205.5,308.5l3.1,13.9h94.6l3.1-13.9c2.1-9.4,6.6-18.3,13.6-24.9c18.4-17.4,29.1-41.8,29.1-67.5c0-51.3-41.7-92.8-93-92.9
                                    c-51.3,0-93,41.6-93,92.9c0,25.7,10.7,50,29,67.5C198.9,290.3,203.4,299.1,205.5,308.5z M213,342.4l6.3,28.3
                                    c2.4,10.6,11.8,18.2,22.7,18.2h27.8c10.9,0,20.3-7.6,22.7-18.2l6.3-28.3H213z"
                            />
                        </svg>
                    </span>
                    <h2>{__('Knowledge Base', 'kemet')}</h2>
                </div>
                <div className='kmt-card-body'>
                    <p>{__('Kemet Theme documentation library will guide you to build your next Kemet website easily without any need to touch a single line of code.', 'kemet')}</p>
                </div>
                <div className='kmt-card-action'>
                    <a className='kmt-button primary' target='_blank' href="#">{__('Documentation', 'kemet')}</a>
                </div>
            </Card>
            <Card>
                <div className='kmt-card-title'>
                    <span className="icon">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={40}
                            height={40}
                            viewBox="0 0 512 512"
                        >
                            <path class="st0" d="M252.8,123.7c-64.4,0-102.9,36-102.9,96.3v23.4c-8.3,6.2-13.3,15.8-13.3,26.4c0,15.6,10.9,28.8,25.5,32.3
                            c13.2,52.5,47.7,87.2,87.4,87.2c5.5,0,10-4.5,10-10s-4.5-10-10-10c-31.2,0-59.8-32.3-69.5-78.4c-1-4.6-5-7.9-9.7-7.9
                            c-0.2,0-0.5,0-0.8,0c-7.1-0.2-12.9-6.1-12.9-13.3c0-5.1,2.9-9.6,7.6-11.8c3.5-1.7,5.7-5.2,5.7-9V231c25.6-6.7,41.6-20.4,50.2-29.9
                            c10.9,6.6,32.4,15.5,69.3,15.5c14.3,0,26.6-1.3,36.5-2.9c1.6,4.7,3.3,11.5,3.3,19.5v66.4c0,16.6-13.3,29.9-29.9,29.9h-12.2
                            c-3.8-8.1-12-13.3-21-13.3c-12.8,0-23.2,10.4-23.2,23.2c0,12.8,10.4,23.2,23.2,23.2c9,0,17.1-5.2,21-13.3h12.2
                            c26.3,0,47.9-20.6,49.6-46.5h0.2c14.7,0,26.6-11.9,26.6-26.6v-13.3c0-14.7-11.9-26.6-26.6-26.6V233c0-9.7-1.9-18.3-3.9-24.5
                            c3.9-2.2,7-5.5,8.8-9.6c2.4-5.4,2.3-11.5-0.2-16.8C336,145.1,299.2,123.7,252.8,123.7z M216.3,256.5c-7.3,0-13.3,5.9-13.3,13.3
                            s5.9,13.3,13.3,13.3c7.3,0,13.3-5.9,13.3-13.3S223.7,256.5,216.3,256.5z M282.7,256.5c-7.3,0-13.3,6-13.2,13.3
                            c0,7.1,5.6,12.9,12.7,13.2c0.2,0,0.4,0,0.6,0c7.3,0,13.3-5.9,13.3-13.3S290.1,256.5,282.7,256.5z"/>
                            <path d="M252.6,123.2c-64.4,0-102.9,36-102.9,96.3v23.4c-8.3,6.2-13.3,15.8-13.3,26.4c0,15.6,10.9,28.8,25.5,32.3
                            c13.2,52.5,47.7,87.2,87.4,87.2c5.5,0,10-4.5,10-10s-4.5-10-10-10c-31.2,0-59.8-32.3-69.5-78.4c-1-4.6-5-7.9-9.7-7.9
                            c-0.2,0-0.5,0-0.8,0c-7.1-0.2-12.9-6.1-12.9-13.3c0-5.1,2.9-9.6,7.6-11.8c3.5-1.7,5.7-5.2,5.7-9v-17.9c25.6-6.7,41.6-20.4,50.2-29.9
                            c10.9,6.6,32.4,15.5,69.3,15.5c14.3,0,26.6-1.3,36.5-2.9c1.6,4.7,3.3,11.5,3.3,19.5v66.4c0,16.6-13.3,29.9-29.9,29.9h-12.2
                            c-3.8-8.1-12-13.3-21-13.3c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2c9,0,17.1-5.2,21-13.3h12.2c26.3,0,47.9-20.6,49.6-46.5
                            h0.2c14.7,0,26.6-11.9,26.6-26.6v-13.3c0-14.7-11.9-26.6-26.6-26.6v-3.3c0-9.7-1.9-18.3-3.9-24.5c3.9-2.2,7-5.5,8.8-9.6
                            c2.4-5.4,2.3-11.5-0.2-16.8C335.8,144.6,299,123.2,252.6,123.2z M216.1,256c-7.3,0-13.3,5.9-13.3,13.3s5.9,13.3,13.3,13.3
                            c7.3,0,13.3-5.9,13.3-13.3S223.5,256,216.1,256z M282.5,256c-7.3,0-13.3,6-13.2,13.3c0,7.1,5.6,12.9,12.7,13.2c0.2,0,0.4,0,0.6,0
                            c7.3,0,13.3-5.9,13.3-13.3S289.9,256,282.5,256z"/>
                        </svg>
                    </span>
                    <h2>{__('Need Help?', 'kemet')}</h2>
                </div>
                <div className='kmt-card-body'>
                    <p>{__('Have a question? Kemet support team is here to help you by answering your questions and handling your issues within 24-48 hours.', 'kemet')}</p>
                </div>
                <div className='kmt-card-action'>
                    <a className='kmt-button primary' target='_blank' href="#">{__('Submit a Ticket', 'kemet')}</a>
                </div>
            </Card>
            <Card>
                <div className='kmt-card-title'>
                    <span className="icon">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={40}
                            height={40}
                            viewBox="0 0 512 512"
                        >
                            <path id="svgexport-28_2_" d="M163.1,222.8c-18.3,0-33.2,14.9-33.2,33.2s14.9,33.2,33.2,33.2s33.2-14.9,33.2-33.2
                            S181.4,222.8,163.1,222.8z M256,222.8c-22,0-39.8,17.8-39.8,39.8s17.8,39.8,39.8,39.8s39.8-17.8,39.8-39.8S278,222.8,256,222.8z
                            M206.1,311.7c-3-1.7-6.4-2.6-9.8-2.6h-66.4c-11,0-19.9,8.9-19.9,19.9v4c0,20.1,23.3,35.9,53.1,35.9c7.9,0,15.7-1.1,23.2-3.5
                            c-2.2-5.2-3.3-10.8-3.3-16.4v-3.3C183,330.7,192.1,317.2,206.1,311.7z M348.9,222.8c-18.3,0-33.2,14.9-33.2,33.2
                            s14.9,33.2,33.2,33.2s33.2-14.9,33.2-33.2S367.3,222.8,348.9,222.8z M382.1,309h-66.4c-3.4,0-6.8,0.9-9.8,2.6
                            c13.9,5.5,23.1,18.9,23.1,33.9v3.3c0,5.6-1.1,11.2-3.3,16.4c7.5,2.4,15.4,3.6,23.2,3.5c29.8,0,53.1-15.7,53.1-35.9v-4
                            C402,318,393.1,309,382.1,309z M305.8,222.8c-2.6,0-5.2-1-7-2.9l-17-17h-22.4c-12.8,0-23.2-10.4-23.2-23.2v-33.2
                            c0-12.8,10.4-23.2,23.2-23.2h92.9c12.8,0,23.2,10.4,23.2,23.2v33.2c0,12.8-10.4,23.2-23.2,23.2h-22.4l-17,17
                            C311,221.8,308.4,222.8,305.8,222.8z M256,388.8c-33.5,0-59.8-17.5-59.8-39.8v-3.3c0-12.8,10.4-23.2,23.2-23.2h73
                            c12.8,0,23.2,10.4,23.2,23.2v3.3C315.8,371.2,289.5,388.8,256,388.8z"/>
                        </svg>
                    </span>
                    <h2>{__('Follow us', 'kemet')}</h2>
                </div>
                <div className='kmt-card-body'>
                    <p>{__('Come and join our Facebook group! Share your thoughts, opinions, suggestions, and help others. You will always be more than welcome!', 'kemet')}</p>
                </div>
                <div className='kmt-card-action'>
                    <a className='kmt-button primary' target='_blank' href="#">{__('Facebook Group', 'kemet')}</a>
                </div>
            </Card>
        </Grid>
        <Grid columns={1} style={{ marginTop: '30px' }} className='kmt-support'>
            <Card>
                <div className='kmt-card-title'>
                    <span className="icon">
                        <Dashicon icon="email" />
                    </span>
                    <h2>{__('Subscribe to Our Newsletter', 'kemet')}</h2>
                </div>
                <div className='kmt-card-body'>
                    <p>{__('Enter your email address and be the first to know the latest features, offers, and updates.', 'kemet')}</p>
                </div>
                <div className='kmt-card-action kmt-subscribe'>
                    <div className="subscribe-form">
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} readOnly={isLoading} />
                        <button className={`kmt-button primary${loadingClass}`} onClick={submitHandler} disabled={isLoading}>{__('Submit', 'kemet')}</button>
                    </div>
                </div>
            </Card>
        </Grid>
    </Container>
}

export default Support