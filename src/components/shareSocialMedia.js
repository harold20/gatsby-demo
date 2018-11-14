import React from 'react'

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    EmailShareButton,
} from 'react-share';

import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    EmailIcon,
} from 'react-share';
const shareUrl = 'https://mundoinformativocr.ga/';
const title = 'Mundo Informativo CR';

const ShareSocialMedia = ({ iconSize, round}) => (
    <div className="social-media">
        <div className="social-media-item">
            <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="button"
            >
                <FacebookIcon size={iconSize} round={round}/>
            </FacebookShareButton>
        </div>
        <div className="social-media-item">
            <TwitterShareButton
                url={shareUrl}
                title={title}
                className="button"
            >
                <TwitterIcon size={iconSize} round={round}/>
            </TwitterShareButton>
        </div>
        <div className="social-media-item">
            <LinkedinShareButton
                url={shareUrl}
                title={title}
                windowWidth={750}
                windowHeight={600}
                className="button"
            >
                <LinkedinIcon size={iconSize} round={round}/>
            </LinkedinShareButton>
        </div>

        <div className="social-media-item">
            <EmailShareButton
                url={shareUrl}
                subject={title}
                body="body"
                className="button"
            >
                <EmailIcon size={iconSize} round={round} />
            </EmailShareButton>
        </div>

        <div className="social-media-item">
            <TelegramShareButton
                url={shareUrl}
                subject={title}
                body="body"
                className="button"
            >
                <TelegramIcon size={iconSize} round={round} />
            </TelegramShareButton>
        </div>

        <div className="social-media-item">
            <WhatsappShareButton
                url={shareUrl}
                subject={title}
                body="body"
                className="button"
            >
                <WhatsappIcon size={iconSize} round={round} />
            </WhatsappShareButton>
        </div>
    </div>
)

export default ShareSocialMedia
