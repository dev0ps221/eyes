class Trigger{
	triggerName = null
	triggerRef  = null
	triggerProp = null
	trigger     = null


	get(attr){
		return this.hasOwnProperty(attr) ? this[attr] : null
	}
	has(att(r){
		return this.hasOwnProperty(attr)
	}
	hasFunc(){
		return this.trigger && typeof this.trigger == 'function'
	}
	hasRefFunc(){
		return this.triggerRef && this.triggerProp && this.triggerRef.hasOwnProperty(this.triggerProp) && typeof this.triggerRef[this.triggerProp]=='function'
	}
	constructor(name,trigger,ref,prop){
		this.triggerName = name
		this.triggerRef  = ref
		this.triggerProp = prop
		this.trigger     = trigger
	}


}

class EyeContext{

}

class Eyes{

	contexts = {}
	triggers = {}


	registerContext(contextName,trigger,ref,prop){
		this.contexts[contextName] = new EyeContext(contextName,trigger,ref,prop)
		this.registerTrigger
	}

	registerTrigger(){

	}

	addTrigger(){

	}

	getTriggers(contextName){

	}

	constructor(){



	}
	listenLoop(){


	}
	mute(){

	}

}
