import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { packages } from 'src/app/Constants/packages-list';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  packagesList: Array<any> = packages;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  showSvg(a: any) {
    let safeHtml: SafeHtml;
    safeHtml = this.sanitizer.bypassSecurityTrustHtml(a);
    return safeHtml;
  }
}
