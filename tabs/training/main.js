Vue.component('sidebar', 
{
	template: `
		<aside class="menu">
		  
		  <slot></slot>
		</aside>

	`,
	methods: {

	},
	created(){
		
	}
});


Vue.component('items', {

	template: `
		<div>
			<div v-for="items in this.list">

				<slot></slot>
				<p class="menu-label">
			    	{{ items.name }}
			  	</p>

				<ul class="menu-list">
					<li v-for="item in items.items">

						<a target="_blank" :href="item.href">{{ item.value }}</a>

					</li>
				</ul>
			</div>
			
		</div>
	`,
	props:
	{
		list: {
			required: true,
			type: Array
		}
	},
	methods: {


	}, 
	created(){

	}

});


var app = new Vue(
{
	el: '#root',
	data: 
	{
		list: [
			{
				name: 'Network', 
				items: [
					{value: 'Google', href: 'http://google.com'},
					{value: 'Facebook', href: 'http://facebook.com'},
					{value: 'Gmail', href: 'http://gmail.com'}
				]			
			}
		]
	},
	methods: {

	},
	mounted() {

	}
});