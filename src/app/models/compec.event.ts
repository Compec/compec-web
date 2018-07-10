import {SocialMedia} from './social-media';
import {GalleryImage} from './gallery-image';

export interface CompecEvent {
    name: string;
    shortName: string;
    place: string;
    secondPlace?: string;
    date: string;
    tags?: Array<string>;
    hashtag?: string;
    description: string;
    websiteLink?: string;
    websiteLinkName?: string;
    social: SocialMedia;
    logoImageSrc: string;
    bgImageSrc: string;
    images: Array<GalleryImage>;
    order: number;
    show: boolean;
}
