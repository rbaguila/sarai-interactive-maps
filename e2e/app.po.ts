/*!
 * Application E2E Page Object
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { browser, element, by } from 'protractor';

export class SaraiInteractiveMapsPage {
  public suitabilityMapsBtn = element(by.css('app-leaflet-button .map__control--suitability-map button'));
  public suitabilityMapsPanel = element(by.css('app-suitability-map-panel .map__control--suitability-map-panel'));
  public cropProductionAreaBtn = element(by.css('app-leaflet-button .map__control--crop-production-area button'));
  public cropProductionAreaPanel = element(by.css('app-crop-production-area-panel .map__control--panel'));
  public ndviBtn = element(by.css('app-leaflet-button .map__control--ndvi button'));
  public ndviPanel = element(by.css('app-ndvi-panel .map__control--panel'));
  public rainfallMapBtn = element(by.css('app-leaflet-button .map__control--rainfall-map button'));
  public rainfallMapPanel = element(by.css('app-rainfall-map-panel .map__control--panel'));

  navigateTo() {
    return browser.get('/');
  }

  getLogoTitle() {
    return element(by.css('app-root #logo > span')).getAttribute('innerText');
  }

  showSuitabilityMapsPanel() {
    return this.suitabilityMapsBtn.click();
  }

  getSuitabilityMapsButtonClass() {
    return this.suitabilityMapsBtn.getAttribute('class');
  }

  getSuitabilityMapsPanelStyle(cssProperty) {
    return this.suitabilityMapsPanel.getCssValue(cssProperty);
  }

  showCropProductionAreaPanel() {
    return this.cropProductionAreaBtn.click();
  }

  getCropProductionAreaButtonClass() {
    return this.cropProductionAreaBtn.getAttribute('class');
  }

  getCropProductionAreaPanelStyle(cssProperty) {
    return this.cropProductionAreaPanel.getCssValue(cssProperty);
  }

  showNdviPanel() {
    return this.ndviBtn.click();
  }

  getNdviButtonClass() {
    return this.ndviBtn.getAttribute('class');
  }

  getNdviPanelStyle(cssProperty) {
    return this.ndviPanel.getCssValue(cssProperty);
  }

  showRainfallMapPanel() {
    return this.rainfallMapBtn.click();
  }

  getRainfallMapButtonClass() {
    return this.rainfallMapBtn.getAttribute('class');
  }

  getRainfallMapPanelStyle(cssProperty) {
    return this.rainfallMapPanel.getCssValue(cssProperty);
  }

}


