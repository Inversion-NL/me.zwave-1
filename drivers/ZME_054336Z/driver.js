'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-meshdriver');

class ZME_054336Z extends ZwaveDevice {

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
		this.log('Register capability onoff - SWITCH_MULTILEVEL');
		this.registerCapability('onoff', 'SWITCH_MULTILEVEL');

		this.log('');
		this.log('Register capability dim - SWITCH_MULTILEVEL');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');

		this.log('');
		this.log('ZME_05461 has been inited');
		this.log('-----------------------------------------------------------');
		this.log('');
	}

}

module.exports = ZME_054336Z;
