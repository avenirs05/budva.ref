$(document).ready(function () {

		$(".mobile_menu").simpleMobileMenu({
				//Hamburger Id
				"hamburgerId": "sm_menu_ham",
				//Menu Wrapper Class
				"wrapperClass": "sm_menu_outer",
				//Submenu Class
				"submenuClass": "submenu",
				// Callback - Menu loaded 
				// "onMenuLoad": function (menu) {
				// 		console.log("menu loaded")
				// 		console.log(menu)
				// },
				//Callback - menu toggle(open/close)
				// "onMenuToggle": function (menu, open) {
				// 		console.log(open)
				// }
		});
})

