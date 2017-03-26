Vue.component('coupon', 
{
	template:`
		<div>
			<input type="text" @blur="applyVoucher" />

			<slot v-if="couponHasBeenApplied"></slot>
		</div>
	`,
	data(){
		return {
			couponHasBeenApplied: false
		};
	},
	methods:
	{
		applyVoucher()
		{
			this.$emit('applied');
			this.couponHasBeenApplied = true;
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

	}
});