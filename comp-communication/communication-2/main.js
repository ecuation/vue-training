window.Event = new class 
{
	constructor()
	{
		this.vue = new Vue();
	}

	fire(event, data){
		this.vue.$emit(event, data);
	}

	listen(event, callback)
	{
		this.vue.$on(event, callback);
	}

};


Vue.component('coupon', 
{
	template:`
		<div>
			<input type="text" @blur="applyVoucher" />
		</div>
	`,
	methods:
	{
		applyVoucher()
		{
			Event.fire('applied');
		}
	}

});


var app = new Vue(
{
	el: '#root',
	data: {
		couponApplied: false
	},
	methods: {
		onCouponApplied(){
			this.couponApplied = true;
		}

	},
	mounted() {

	},
	created(){
		Event.listen('applied', () => alert('handle it!'));
	}
});