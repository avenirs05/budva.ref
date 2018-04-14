"use strict";

$(document).ready(function () {

		$(".mobile_menu").simpleMobileMenu({
				//Hamburger Id
				"hamburgerId": "sm_menu_ham",
				//Menu Wrapper Class
				"wrapperClass": "sm_menu_outer",
				//Submenu Class
				"submenuClass": "submenu"
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
});
'use strict';

jQuery(function () {

		$('.menu__link').click(function (e) {
				var thisText = $(this).text().trim();
				$(this).addClass('menu__link_pressed');

				$('.menu__link').each(function (indx, el) {
						if (thisText == $(el).text().trim()) {
								$(el).addClass('menu__link_pressed');
						} else {
								$(el).removeClass('menu__link_pressed');
						}
				});
		});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYl9tZW51LmpzIiwiYmxvY2tzL2hlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzaW1wbGVNb2JpbGVNZW51IiwialF1ZXJ5IiwiY2xpY2siLCJlIiwidGhpc1RleHQiLCJ0ZXh0IiwidHJpbSIsImFkZENsYXNzIiwiZWFjaCIsImluZHgiLCJlbCIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFNUJGLElBQUUsY0FBRixFQUFrQkcsZ0JBQWxCLENBQW1DO0FBQ2pDO0FBQ0EsbUJBQWUsYUFGa0I7QUFHakM7QUFDQSxvQkFBZ0IsZUFKaUI7QUFLakM7QUFDQSxvQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZmlDLEdBQW5DO0FBaUJELENBbkJEOzs7QUNBQUMsT0FBTyxZQUFXOztBQUVoQkosSUFBRSxhQUFGLEVBQWlCSyxLQUFqQixDQUF1QixVQUFTQyxDQUFULEVBQVk7QUFDakMsUUFBSUMsV0FBV1AsRUFBRSxJQUFGLEVBQVFRLElBQVIsR0FBZUMsSUFBZixFQUFmO0FBQ0FULE1BQUUsSUFBRixFQUFRVSxRQUFSLENBQWlCLG9CQUFqQjs7QUFFQVYsTUFBRSxhQUFGLEVBQWlCVyxJQUFqQixDQUFzQixVQUFTQyxJQUFULEVBQWVDLEVBQWYsRUFBbUI7QUFDdkMsVUFBS04sWUFBWVAsRUFBRWEsRUFBRixFQUFNTCxJQUFOLEdBQWFDLElBQWIsRUFBakIsRUFBdUM7QUFDcENULFVBQUVhLEVBQUYsRUFBTUgsUUFBTixDQUFlLG9CQUFmO0FBQ0YsT0FGRCxNQUVPO0FBQ0pWLFVBQUVhLEVBQUYsRUFBTUMsV0FBTixDQUFrQixvQkFBbEI7QUFDRjtBQUNGLEtBTkQ7QUFPRCxHQVhEO0FBYUQsQ0FmRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cblx0XHQkKFwiLm1vYmlsZV9tZW51XCIpLnNpbXBsZU1vYmlsZU1lbnUoe1xuXHRcdFx0XHQvL0hhbWJ1cmdlciBJZFxuXHRcdFx0XHRcImhhbWJ1cmdlcklkXCI6IFwic21fbWVudV9oYW1cIixcblx0XHRcdFx0Ly9NZW51IFdyYXBwZXIgQ2xhc3Ncblx0XHRcdFx0XCJ3cmFwcGVyQ2xhc3NcIjogXCJzbV9tZW51X291dGVyXCIsXG5cdFx0XHRcdC8vU3VibWVudSBDbGFzc1xuXHRcdFx0XHRcInN1Ym1lbnVDbGFzc1wiOiBcInN1Ym1lbnVcIixcblx0XHRcdFx0Ly8gQ2FsbGJhY2sgLSBNZW51IGxvYWRlZCBcblx0XHRcdFx0Ly8gXCJvbk1lbnVMb2FkXCI6IGZ1bmN0aW9uIChtZW51KSB7XG5cdFx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcIm1lbnUgbG9hZGVkXCIpXG5cdFx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhtZW51KVxuXHRcdFx0XHQvLyB9LFxuXHRcdFx0XHQvL0NhbGxiYWNrIC0gbWVudSB0b2dnbGUob3Blbi9jbG9zZSlcblx0XHRcdFx0Ly8gXCJvbk1lbnVUb2dnbGVcIjogZnVuY3Rpb24gKG1lbnUsIG9wZW4pIHtcblx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKG9wZW4pXG5cdFx0XHRcdC8vIH1cblx0XHR9KTtcbn0pXG5cbiIsImpRdWVyeShmdW5jdGlvbigpIHtcclxuXHJcblx0XHQkKCcubWVudV9fbGluaycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHR2YXIgdGhpc1RleHQgPSAkKHRoaXMpLnRleHQoKS50cmltKCk7XHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnbWVudV9fbGlua19wcmVzc2VkJyk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdCQoJy5tZW51X19saW5rJykuZWFjaChmdW5jdGlvbihpbmR4LCBlbCkgeyBcclxuXHRcdFx0XHRcdFx0aWYgKCB0aGlzVGV4dCA9PSAkKGVsKS50ZXh0KCkudHJpbSgpICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQkKGVsKS5hZGRDbGFzcygnbWVudV9fbGlua19wcmVzc2VkJyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCQoZWwpLnJlbW92ZUNsYXNzKCdtZW51X19saW5rX3ByZXNzZWQnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHR9KVxyXG5cclxufSk7Il19
