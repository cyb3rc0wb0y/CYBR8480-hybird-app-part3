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
