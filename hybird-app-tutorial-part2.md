#### Authors
Jeffrey Smith

#### Plugin Name (which plugin did you look at?)
https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device/index.html

#### Usage
This plugin defines a global device object, which describes the device's hardware and software.

#### 1. Install the Cordova Plugin
```bash
corber plugin add cordova-plugin-device
```
#### 2. Generate Ember Component
```bash
ember generate component device-status
```

#### 3. Edit the following files:

#### 3a. application.hbs
```hbs
 Device Information
 
 {{device-status}}
```
#### 3b. device-status.hbs
```hbs
Platform: {{platform}}<br>
Model: {{model}}<br>
UUID: {{uuid}} <br>
Manufacturer: {{manufacturer}}<br>
Virtural: {{virtural}}<br>
Serial: {{serial}}<br>
Device: {{device}}<br>
```
#### 3c. device-status.js
```javascript
import ember from 'ember';

export default ember.Component.extend({
  model: device.version,
  platform: device.platform,
  uuid: device.uuid,
  manufacturer: device.manufacturer,
  virtural: device.isVirtual,
  serial: device.serial,
  device: device.model
   });

```
