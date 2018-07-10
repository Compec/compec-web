import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faLifeRing, faMapMarkerAlt, faEnvelope, faPhone,
  faSync, faTag, faChevronRight, faChevronLeft, faTimes, faImages, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import {GalleryComponent} from './components/gallery/gallery.component';

library.add(faUserSecret, faLifeRing, faMapMarkerAlt, faEnvelope, faPhone, faClock, faTag,
  faCalendarAlt, faTwitter, faFacebookF, faInstagram, faLinkedinIn, faGithub, faSync,
  faChevronRight, faChevronLeft, faTimes, faImages, faEnvelopeOpen);

@NgModule({
    declarations: [
      GalleryComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        CommonModule,
        FontAwesomeModule,
      GalleryComponent
    ]
})
export class SharedModule {}