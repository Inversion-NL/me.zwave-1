'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-meshdriver');

class ZwaveME_05461 extends ZwaveDevice {

	async onMeshInit() {

		// enable debugging
		this.log('');
		this.log('Enable debugging');
		this.enableDebug();

		// print the node's info to the console
		this.log('');
		this.log('Print node info');
		this.printNode();

		this.log('');
		this.log('Register capability onoff - SWITCH_BINARY');
		this.registerCapability('onoff', 'SWITCH_BINARY', {
			getOpts: {
				getOnStart: true // get the initial value on app start (only use for non-battery devices)
				//pollInterval: 'poll_interval', // maps to device settings
				// getOnOnline: true, // use only for battery devices
			}
		});

		this.log('');
		this.log('ZME_05461 has been inited');
		this.log('-----------------------------------------------------------');
		this.log('');
	}

}

module.exports = ZwaveME_05461;

/*
[ZME_05461] [0] Node: 90
[ZME_05461] [0] - Manufacturer id: 277
[ZME_05461] [0] - ProductType id: 4096
[ZME_05461] [0] - Product id: 256
[ZME_05461] [0] - Firmware Version: 1.0
[ZME_05461] [0] - Hardware Version:
[ZME_05461] [0] - Firmware id: undefined
[ZME_05461] [0] - Secure: ⨯
[ZME_05461] [0] - Battery: false
[ZME_05461] [0] - DeviceClassBasic: BASIC_TYPE_ROUTING_SLAVE
[ZME_05461] [0] - DeviceClassGeneric: GENERIC_TYPE_SWITCH_BINARY
[ZME_05461] [0] - DeviceClassSpecific: SPECIFIC_TYPE_POWER_SWITCH_BINARY
[ZME_05461] [0] - Token: 549d8412-5499-47f9-810f-6e026b33100a
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_BASIC
[ZME_05461] [0] -- Version: 1
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- BASIC_GET
[ZME_05461] [0] --- BASIC_REPORT
[ZME_05461] [0] --- BASIC_SET
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_SWITCH_BINARY
[ZME_05461] [0] -- Version: 1
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- SWITCH_BINARY_GET
[ZME_05461] [0] --- SWITCH_BINARY_REPORT
[ZME_05461] [0] --- SWITCH_BINARY_SET
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_PROTECTION
[ZME_05461] [0] -- Version: 1
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- PROTECTION_GET
[ZME_05461] [0] --- PROTECTION_REPORT
[ZME_05461] [0] --- PROTECTION_SET
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_CONFIGURATION
[ZME_05461] [0] -- Version: 1
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- CONFIGURATION_GET
[ZME_05461] [0] --- CONFIGURATION_REPORT
[ZME_05461] [0] --- CONFIGURATION_SET
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_ASSOCIATION
[ZME_05461] [0] -- Version: 2
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- ASSOCIATION_GET
[ZME_05461] [0] --- ASSOCIATION_GROUPINGS_GET
[ZME_05461] [0] --- ASSOCIATION_GROUPINGS_REPORT
[ZME_05461] [0] --- ASSOCIATION_REMOVE
[ZME_05461] [0] --- ASSOCIATION_REPORT
[ZME_05461] [0] --- ASSOCIATION_SET
[ZME_05461] [0] --- ASSOCIATION_SPECIFIC_GROUP_GET
[ZME_05461] [0] --- ASSOCIATION_SPECIFIC_GROUP_REPORT
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_MULTI_CHANNEL_ASSOCIATION
[ZME_05461] [0] -- Version: 2
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- MULTI_CHANNEL_ASSOCIATION_GET
[ZME_05461] [0] --- MULTI_CHANNEL_ASSOCIATION_GROUPINGS_GET
[ZME_05461] [0] --- MULTI_CHANNEL_ASSOCIATION_GROUPINGS_REPORT
[ZME_05461] [0] --- MULTI_CHANNEL_ASSOCIATION_REMOVE
[ZME_05461] [0] --- MULTI_CHANNEL_ASSOCIATION_REPORT
[ZME_05461] [0] --- MULTI_CHANNEL_ASSOCIATION_SET
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_METER
[ZME_05461] [0] -- Version: 4
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- METER_GET
[ZME_05461] [0] --- METER_REPORT
[ZME_05461] [0] --- METER_RESET
[ZME_05461] [0] --- METER_SUPPORTED_GET
[ZME_05461] [0] --- METER_SUPPORTED_REPORT
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_MULTI_CHANNEL
[ZME_05461] [0] -- Version: 3
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- MULTI_CHANNEL_CAPABILITY_GET
[ZME_05461] [0] --- MULTI_CHANNEL_CAPABILITY_REPORT
[ZME_05461] [0] --- MULTI_CHANNEL_CMD_ENCAP
[ZME_05461] [0] --- MULTI_CHANNEL_END_POINT_FIND
[ZME_05461] [0] --- MULTI_CHANNEL_END_POINT_FIND_REPORT
[ZME_05461] [0] --- MULTI_CHANNEL_END_POINT_GET
[ZME_05461] [0] --- MULTI_CHANNEL_END_POINT_REPORT
[ZME_05461] [0] --- MULTI_INSTANCE_CMD_ENCAP
[ZME_05461] [0] --- MULTI_INSTANCE_GET
[ZME_05461] [0] --- MULTI_INSTANCE_REPORT
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_SWITCH_ALL
[ZME_05461] [0] -- Version: 1
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- SWITCH_ALL_GET
[ZME_05461] [0] --- SWITCH_ALL_OFF
[ZME_05461] [0] --- SWITCH_ALL_ON
[ZME_05461] [0] --- SWITCH_ALL_REPORT
[ZME_05461] [0] --- SWITCH_ALL_SET
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_VERSION
[ZME_05461] [0] -- Version: 1
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- VERSION_COMMAND_CLASS_GET
[ZME_05461] [0] --- VERSION_COMMAND_CLASS_REPORT
[ZME_05461] [0] --- VERSION_GET
[ZME_05461] [0] --- VERSION_REPORT
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_MANUFACTURER_SPECIFIC
[ZME_05461] [0] -- Version: 1
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- MANUFACTURER_SPECIFIC_GET
[ZME_05461] [0] --- MANUFACTURER_SPECIFIC_REPORT
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_SWITCH_MULTILEVEL
[ZME_05461] [0] -- Version: 1
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- SWITCH_MULTILEVEL_GET
[ZME_05461] [0] --- SWITCH_MULTILEVEL_REPORT
[ZME_05461] [0] --- SWITCH_MULTILEVEL_SET
[ZME_05461] [0] --- SWITCH_MULTILEVEL_START_LEVEL_CHANGE
[ZME_05461] [0] --- SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE
[ZME_05461] [0] - CommandClass: COMMAND_CLASS_SCENE_ACTIVATION
[ZME_05461] [0] -- Version: 1
[ZME_05461] [0] -- Commands:
[ZME_05461] [0] --- SCENE_ACTIVATION_SET
[ZME_05461] [0] - MultiChannelNode: 1
[ZME_05461] [0] - DeviceClassGeneric: GENERIC_TYPE_SWITCH_BINARY
[ZME_05461] [0] -- CommandClass: COMMAND_CLASS_SWITCH_BINARY
[ZME_05461] [0] --- Version: 1
[ZME_05461] [0] --- Commands:
[ZME_05461] [0] ---- SWITCH_BINARY_GET
[ZME_05461] [0] ---- SWITCH_BINARY_REPORT
[ZME_05461] [0] ---- SWITCH_BINARY_SET
[ZME_05461] [0] -- CommandClass: COMMAND_CLASS_METER
[ZME_05461] [0] --- Version: 4
[ZME_05461] [0] --- Commands:
[ZME_05461] [0] ---- METER_GET
[ZME_05461] [0] ---- METER_REPORT
[ZME_05461] [0] ---- METER_RESET
[ZME_05461] [0] ---- METER_SUPPORTED_GET
[ZME_05461] [0] ---- METER_SUPPORTED_REPORT
[ZME_05461] [0] -- CommandClass: COMMAND_CLASS_BASIC
[ZME_05461] [0] --- Version: 1
[ZME_05461] [0] --- Commands:
[ZME_05461] [0] ---- BASIC_GET
[ZME_05461] [0] ---- BASIC_REPORT
[ZME_05461] [0] ---- BASIC_SET
[ZME_05461] [0] - MultiChannelNode: 2
[ZME_05461] [0] - DeviceClassGeneric: GENERIC_TYPE_SWITCH_BINARY
[ZME_05461] [0] -- CommandClass: COMMAND_CLASS_SWITCH_BINARY
[ZME_05461] [0] --- Version: 1
[ZME_05461] [0] --- Commands:
[ZME_05461] [0] ---- SWITCH_BINARY_GET
[ZME_05461] [0] ---- SWITCH_BINARY_REPORT
[ZME_05461] [0] ---- SWITCH_BINARY_SET
[ZME_05461] [0] -- CommandClass: COMMAND_CLASS_METER
[ZME_05461] [0] --- Version: 4
[ZME_05461] [0] --- Commands:
[ZME_05461] [0] ---- METER_GET
[ZME_05461] [0] ---- METER_REPORT
[ZME_05461] [0] ---- METER_RESET
[ZME_05461] [0] ---- METER_SUPPORTED_GET
[ZME_05461] [0] ---- METER_SUPPORTED_REPORT
[ZME_05461] [0] -- CommandClass: COMMAND_CLASS_BASIC
[ZME_05461] [0] --- Version: 1
[ZME_05461] [0] --- Commands:
[ZME_05461] [0] ---- BASIC_GET
[ZME_05461] [0] ---- BASIC_REPORT
[ZME_05461] [0] ---- BASIC_SET
[ZME_05461] [0] ------------------------------------------
*/
