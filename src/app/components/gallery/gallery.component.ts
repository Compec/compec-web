import {Component, Input, OnInit} from '@angular/core';
import {GalleryImage} from '../../models/gallery-image';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input('images') images: Array<GalleryImage>;
  currentImage: GalleryImage;
  currentImageIndex: number;
  showOverlay = false;
  showMobileGallery = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (!this.images) {
      this.images = [];
    }
    this.currentImageIndex = 0;
  }
  selectImage(image: GalleryImage, i: number) {
    this.dataService.toggleToolbar.emit(false);
    this.currentImage = image;
    this.currentImageIndex = i;
    this.showOverlay = true;
  }
  closeOverlay() {
    this.dataService.toggleToolbar.emit(true);
    this.showOverlay = false;
  }
  toggleMobileGallery() {
    this.showMobileGallery = this.showMobileGallery ? false : true;
}
  changeImageByIndex(imageIndex: number) {
    if (imageIndex === this.images.length) {
      imageIndex = 0;
    } else if (imageIndex === 0) {
      imageIndex = this.images.length -1;
    }
    this.currentImage = this.images[imageIndex];
    this.currentImageIndex = imageIndex;
  }

}
