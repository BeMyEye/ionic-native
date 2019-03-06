import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Volume
 * @description
 * Preventing from volume changes, and watch hardware volume buttons
 *
 * Requires Cordova plugin: `https://github.com/BeMyEye/bme-plugin-volume.git`
 *
 * @usage
 * ```typescript
 * // Prevent volume from changing
 * this.volume.preventVolumeChange();
 *
 * // Allow volume to change
 * this.volume.allowVolumeChange();
 *
 * // Get event when a hardware volume button is pressed
 * this.volume.watchVolumeButtonPressed().subscribe(() => {
 *  console.log('Volume button pressed);
 * });
 *
 * ```
 *
 */
@Plugin({
  pluginName: 'Volume',
  plugin: 'bme-plugin-volume',
  pluginRef: 'BeMyEyeVolume',
  repo: 'https://github.com/BeMyEye/bme-plugin-volume',
  platforms: ['Android', 'iOS']
})
@Injectable({
  providedIn: 'root'
})
export class Volume extends IonicNativePlugin {

  /**
   * Prevent volume from changing
   * @return void
   */
  @Cordova()
  preventVolumeChange(): void {
    return;
  }

  /**
   * Allow volume to change
   * @return void
   */
  @Cordova()
  allowVolumeChange(): void {
    return;
  }

  /**
   * Get event when a hardware volume button is pressed
   * @return Observable<void>
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
    observable: true
  })
  watchVolumeButtonPressed(): Observable<void> {
    return;
  }

}
